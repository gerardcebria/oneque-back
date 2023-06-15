import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kuizorik12',
    database: 'colas'
});
  
export default db;