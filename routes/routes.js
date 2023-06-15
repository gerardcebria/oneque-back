// import express
import express from "express";
  
// import function from controller
import { showQueues, showQueueById, createQueue, updateQueue, deleteQueue } from "../controllers/Queue.js";
  
// init express router
const router = express.Router();
  
// Get All Queue
router.get('/queue', showQueues);
  
// Get Single Queue
router.get('/queue/:id', showQueueById);
  
// Create New Queue
router.post('/queue', createQueue);
  
// Update Queue
router.put('/queue/:id', updateQueue);
  
// Delete Queue
router.delete('/queue/:id', deleteQueue);
  
// export default router
export default router;