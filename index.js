require("dotenv").config({ path: "./.env" }); // Make sure to load .env.test explicitly
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth");
const { sequelize } = require("./models");

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

// Protected Route Example
app.get("/api/protected", authMiddleware, (req, res) => {
  res.send("This is a protected route");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected!");
});
