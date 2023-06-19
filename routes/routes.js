// import express
import express from "express";

// import function from controller
import { showQueues, showQueueById, createQueue, updateQueue, deleteQueue } from "../controllers/Queue.js";
import { showUsers, showUserById, createUser, updateUser, deleteUser } from "../controllers/User.js";

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

// Get All User
router.get('/user', showUsers);

// Get Single User
router.get('/user/:id', showUserById);

// Create New User
router.post('/user', createUser);

// Update User
router.put('/user/:id', updateUser);

// Delete User
router.delete('/user/:id', deleteUser);

// export default router
export default router;