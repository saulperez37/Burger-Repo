const connection = require("../config/connections.js");


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

const orm = {

    all: function (tableInput, cb) {
        var sqlQuery = `SELECT * FROM ${tableInput}`;

        connection.query(sqlQuery, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    create: function (tableInput, cols, vals, cb) {
        var sqlQuery = `INSERT INTO  ${tableInput} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

        connection.query(sqlQuery, vals, function (err, result) {
            if (err) throw err;
            console.log("Sucesfully Added");
            cb(result);
        });
    },

    update: function (tableInput, cols, vals, condition, cb) {
        var sqlQuery = `UPDATE ${tableInput} SET ${cols.toString()} = ? WHERE ${condition}`;

        connection.query(sqlQuery, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;