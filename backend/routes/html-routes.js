const mysql = require('mysql');

module.exports = function(app, connection) {
  app.get('/transactions', function(req, res) {
    // res.send('Hello from react project');
    connection.query('SELECT * FROM transaction', function (error, data) {
      (error) ? res.send(error) : res.json({transaction: data});
    })
  });
};
