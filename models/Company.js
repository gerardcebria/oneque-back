// import connection
import { query } from "express";
import db from "../config/database.js";
  
// Get All Companies
export const getCompanies = (result) => {
    db.query("SELECT * FROM user", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Company
export const getCompanyById = (id, result) => {
    db.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Company to Database
export const insertCompany = (data, result) => {
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
  
// Update Company to Database
export const updateCompanyById = (data, id, result) => {
    db.query("UPDATE user SET name = ?, lastname = ?, email = ?, phone = ? WHERE id = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Company to Database
export const deleteCompanyById = (id, result) => {
    db.query("DELETE FROM user WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

