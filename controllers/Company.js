
// Import function from Company Model
import { getCompanies, getCompanyById, insertCompany, updateCompanyById, deleteCompanyById } from "../models/Company.js";
  
// Get All Company
export const showCompany = (req, res) => {
    getCompanies((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Company 
export const showCompanyById = (req, res) => {
    getCompanyById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Company
export const createCompany = (req, res) => {
    const data = req.body;
    insertCompany(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Company
export const updateCompany = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCompanyById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Company
export const deleteCompany = (req, res) => {
    const id = req.params.id;
    deleteCompanyById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
