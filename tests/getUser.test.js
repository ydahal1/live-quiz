const { db } = require("./testServer"); // Import the Sequelize instance and models from testServer.js
const { User } = db; // Extract the User model from Sequelize instance

describe("User Model Test", () => {
  // Close the database connection after all tests
  afterAll(async () => {
    await db.sequelize.close(); // Close the database connection
  });

  test("Should create a new user in the test database", async () => {
    // Create a new user using the User model
    const user = await User.create({
      username: "apple",
      password: "password123", // In a real app, passwords should be hashed
    });

    // Log the user object to see what is returned by Sequelize
    console.log(user.toJSON());

    // Expect the user to be created with the properties we specified
    expect(user.username).toBe("apple");
    expect(user.password).toBe("password123"); // In a real app, check the hashed password
  });
});
