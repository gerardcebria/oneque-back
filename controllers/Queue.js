
// Import function from Queue Model
import { getQueues, getQueueById, insertQueue, updateQueueById, deleteQueueById } from "../models/Queue.js";
  
// Get All Queues
export const showQueues = (req, res) => {
    getQueues((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Queue 
export const showQueueById = (req, res) => {
    getQueueById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Queue
export const createQueue = (req, res) => {
    const data = req.body;
    insertQueue(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Queue
export const updateQueue = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateQueueById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Queue
export const deleteQueue = (req, res) => {
    const id = req.params.id;
    deleteQueueById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}