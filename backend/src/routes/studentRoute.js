import express from "express";
import { deleteStudent, getAllStudent, registerStd, updateStudent, getSingleStudent } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get('/', getAllStudent);
studentRouter.post('/create', registerStd);
studentRouter.get('/:id', getSingleStudent);
studentRouter.put('/update/:id', updateStudent);
studentRouter.delete('/delete/:id', deleteStudent);

export default studentRouter