require('dotenv').config()

const mysql = require('mysql');

const connection = function(route){
    console.log(`Connection with DB require`)
    return  mysqlConnection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })}

module.exports = function () {
    return connection;
}