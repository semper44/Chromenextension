
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "",
    password: "",
    user: "",
    database: "",
    port:""
})

if (!connection) {
    throw new Error("connection failed");
}

module.exports = connection;