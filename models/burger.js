const orm = require("../config/orm.js");

const burger = {
    all: function (hb) {
        orm.all("burgers", function (res) {
            hb(res);
        });
    },

    create: function (cols, vals, hb) {
        orm.create("burgers", cols, vals, function (res) {
            hb(res);
        });
    },

    update: function(objColVals, condition, hb) {
        orm.update("burgers", objColVals, condition, function (res) {
            hb(res);
        });
    },

    delete: function(condition, hb) {
        orm.delete("burgers", condition, function (res) {
            hb(res);
        });
    }
};

module.exports = burger;