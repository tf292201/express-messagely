// Correct the import statement to properly import pg
const { Client } = require("pg");
const { DB_URI } = require("./config");

// Create a new instance of Client
const db = new Client({
    connectionString: DB_URI
});

// Connect to the database
db.connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.error("Error connecting to database:", err);
    });

// Export the db client
module.exports = db;
