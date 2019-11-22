const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function(cols, vals, condition, cb) {
        orm.update("burgers", cols, vals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;