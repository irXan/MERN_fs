import express from "express";
import Student from "../models/studentModel.js";

const app = express();

export const registerStd = async (req, res)=>{
    try {
        const {name, age, grade, email, address} = req.body;
        const newStd = Student({name, age, grade, email, address});
        await newStd.save();

        res.status(201).json({message:`New Student: ${newStd} registered`});
    } catch (e) {
        res.status(500).json({message:"Internal Srever Error:", e})
    }
}

export const getAllStudent = async (req, res)=>{
    try {
        const stdData = await Student.find();
        res.status(200).json({stdData});
    } catch (e) {
        res.status(500).json({message:"Internal Srever Error:", e})
    }
}

export const getSingleStudent = async (req, res)=>{
    try {
        const {id} = req.params;
        const stdData = await Student.findById(id);

        if(!stdData){
            res.status.json({message:"StudentNotFound - :("})
        }

        res.status(200).json({message:"StudentDataFound - :)", stdData});
    } catch (e) {
        res.status(500).json({message:"Internal Srever Error:", e})
    }
}

export const updateStudent = async(req, res)=>{
    try {
        const {id} = req.params;
        const updateStd = await Student.findByIdAndUpdate(id, req.body, {
            new: true
        });

        if(!updateStd){
            res.status.json({message:"StudentNotFound - :("})
        }
        
        res.status(201).json({message:"StudentUpdatedSuccessfully - :)", updateStd})
    } catch (e) {
        res.status(500).json({message:"Internal Srever Error:", e})
    }
}

export const deleteStudent = async(req, res)=>{
    try {
        const {id} = req.params;
        const deleteStd = await Student.findByIdAndDelete(id);

        res.status(201).json({message:"StudentDeletedSuccesfully - :)", deleteStd})
    } catch (e) {
        res.status(500).json({message:"Internal Srever Error:", e})
    }
}