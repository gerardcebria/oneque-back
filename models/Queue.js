// import connection
import db from "../config/database.js";
  
// Get All Queues
export const getQueues = (result) => {
    db.query("SELECT * FROM eventos", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Queue
export const getQueueById = (id, result) => {
    db.query("SELECT * FROM colas WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Queue to Database
export const insertQueue = (data, result) => {
    db.query("INSERT INTO colas SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Queue to Database
export const updateQueueById = (data, id, result) => {
    db.query("UPDATE colas SET nombre = ?, fecha = ? WHERE id = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Queue to Database
export const deleteQueueById = (id, result) => {
    db.query("DELETE FROM colas WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}