// require("dotenv").config({ path: "./.env" });
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, RefreshToken } = require("../models");
const { default: axios } = require("axios");
const qs = require("qs"); // Use qs to handle x-www-form-urlencoded
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const secretKey = "your_jwt_secret_key";

// Register User
router.post("/register", async (req, res) => {
  const { username, password, userType } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Register ...");

  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      userType,
    });
    res.status(201).send("User registered");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Login MS user
router.post("/login-ms", async (req, res) => {
  try {
    const msAuthUrl = `https://login.microsoftonline.com/${process.env.TENENT_ID}/oauth2/v2.0/token`;

    // // Get MS user
    // const msUser = await axios.post(
    //   msAuthUrl,
    //   qs.stringify({
    //     client_id: process.env.CLIENT_ID,
    //     scope: process.env.SCOPE,
    //     client_secret: process.env.CLIENT_SECRET,
    //     redirect_uri: process.env.REDIRECT_URI,
    //     grant_type: "authorization_code",
    //     code: req.body.code,
    //   }),
    //   {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   }
    // );

    // // Get ID token
    // const identity = jwt.decode(msUser.data.id_token);

    // Test - Identity
    const identity = {
      aud: "929f9925-54f9-415c-b308-4705996c84ad",
      iss: "https://login.microsoftonline.com/482198bb-ae7b-4b25-8b7a-6d7f32faa083/v2.0",
      iat: 1727689847,
      nbf: 1727689847,
      exp: 1727693747,
      email: "ydahal31@gatech.edu",
      name: "Dahal, Yadhap",
      oid: "9bf8e9d1-3b62-46c2-8de4-6a97ef37e3d7",
      preferred_username: "ydahal3@gatech.edu",
      rh: "0.ATgAu5ghSHuuJUuLem1_MvqggyWZn5L5VFxBswhHBZlshK04AJA.",
      sub: "OXR8uMTG9JhdL4YVraNjqO-giwycYOV56984T7NbgzM",
      tid: "482198bb-ae7b-4b25-8b7a-6d7f32faa083",
      uti: "LKKrkdDsHUCe4j4Z7jIQAA",
      ver: "2.0",
    };

    // Check if user is in the database
    const user = await User.findOne({
      where: { username: identity.email },
    });

    const tokeId = uuidv4();
    console.log(tokeId);

    // If user is not in the database, register the user
    if (!user) {
      console.log("User not found - registering user");
      await User.create({ username: identity.email, userType: "microsoft" });
      res.status(201).send("User registered");
    }

    // If user is present
    if (user) {
      console.log("User already exists - generating token");
      const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1m" });

      // create refresh token
      const refreshToken = jwt.sign({ id: user.id }, secretKey, {
        expiresIn: "7d",
      });

      // Save refresh token in the database
      await RefreshToken.create({
        id: tokeId,
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });

      res.status(200).json({ token });
    }
  } catch (err) {
    console.log(err); // Handle error
    res.status(500).send("Server error");
  }
});

module.exports = router;
