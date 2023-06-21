// import connection
import { query } from "express";
import db from "../config/database.js";
  
// Get All Users
export const getUsers = (result) => {
    db.query("SELECT * FROM user", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single User
export const getUserById = (id, result) => {
    db.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert User to Database
export const insertUser = (data, result) => {
    const query = "INSERT INTO user (name, lastname, email, phone, queue) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [data.name, data.lastname, data.email, data.phone, data.queue], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update User to Database
export const updateUserById = (data, id, result) => {
    db.query("UPDATE user SET name = ?, lastname = ? WHERE id = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete User to Database
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM user WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}