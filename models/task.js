const orm = require("../config/orm.js");

var task = {
  select: function(cb) {
    orm.selectAll("tasks", function(res) {
      cb(res);
    });
  },
  insert: function(cols, vals, cb) {
    orm.insertOne("tasks", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("tasks", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = task;
