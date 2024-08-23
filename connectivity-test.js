const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'kitra_user',           // Replace with your MySQL user
  password: 'kitra_password', // Replace with your MySQL password
  database: 'kitra_db', // Replace with your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Example query
connection.query('SELECT 1 + 1 AS total', (err, results) => {
  if (err) throw err;
  console.log('The total is: ', results[0].total);
});

connection.query('show databases', (err, results) => {
    if (err) throw err;
    console.log('The total is: ', results);
});

connection.query('SELECT * from kitra_db.users;', (err, results) => {
    if (err) throw err;
    console.log('The total record count of users is: ', results.length);
    console.log('first record is: ', results[0]);
});

connection.query('SELECT * from kitra_db.treasures;', (err, results) => {
    if (err) throw err;
    console.log('The total record count of treasures is: ', results.length);
    console.log('first record is: ', results[0]);
});

connection.query('SELECT * from kitra_db.money_values;', (err, results) => {
    if (err) throw err;
    console.log('The total record count of money_values is: ', results.length);
    console.log('first record is: ', results[0]);
});

connection.end();