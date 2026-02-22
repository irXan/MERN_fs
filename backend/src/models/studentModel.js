import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    age: {type: Number, min: 5, max: 25},
    grade: {type: String, enum: ['A','B','C', 'D', 'F']},
    isActive: {type: Boolean, default: true},
}, {timestamps: true});

const Student = mongoose.model('Student',studentSchema);
export default Student;