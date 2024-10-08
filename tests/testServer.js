require("dotenv").config({ path: "../.env" });
process.env.NODE_ENV = "test";

const express = require("express");
const db = require("../models"); // Sequelize models, assuming tables are manually created
const app = express();

const TEST_PORT = process.env.TEST_PORT || 3002;

// Just start the server, no syncing or migrations
db.sequelize
  .authenticate() // Only authenticate the database connection
  .then(() => {
    app.listen(TEST_PORT, () => {
      console.log(`Test server running on port ${TEST_PORT}`);
      console.log("Connected to test database!");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the test database:", error);
  });

module.exports = { app, db };
