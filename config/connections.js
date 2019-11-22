const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mypassword",
        database: "burgers_db"
    })
}

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mypassword",
    database: "burgers_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;