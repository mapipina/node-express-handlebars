var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput], function(err, result) {
      // if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      // if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, colToSearch, valOfCol, secondCol, secondVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol, secondCol, secondVal], function(err, result) {
      // if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
