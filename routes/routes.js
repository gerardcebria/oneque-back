// import express
import express from "express";

// import function from controller
import { showQueues, showQueueById, createQueue, updateQueue, deleteQueue } from "../controllers/Queue.js";
import { showUsers, showUserById, createUser, updateUser, deleteUser, getUserQuantity } from "../controllers/User.js";
import { showCompany, showCompanyById, createCompany, updateCompany, deleteCompany } from "../controllers/Company.js";

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

// Get All Company
router.get('/companies', showCompany);

// Get Single Company
router.get('/company/:id', showCompanyById);

// Create New Company
router.post('/company', createCompany);

// Update Company
router.put('/company/:id', updateCompany);

// Delete Company
router.delete('/company/:id', deleteCompany);

// Quantity users
router.get('/user-quantity/:id', getUserQuantity)

// export default router
export default router;