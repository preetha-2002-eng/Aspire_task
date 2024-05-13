// Title - Deletion using Mongoose 
// Author - Preetha I
// Created Date - 08/05/2024

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skillName: String,
    experience: Number,
    proficiency: String
});

const jobSeekerSchema = new Schema({
    jobseekerName: String,
    emailId: String,
    age: Number,
    certified: Boolean,
    skills: [skillSchema]
});

const JobSeeker = mongoose.model('jobseeker', jobSeekerSchema);

mongoose.connect("mongodb://127.0.0.1:27017/aspire");

JobSeeker.deleteMany({ jobseekerName: "Ravi" })
    .then(result => {
        console.log(`${result.deletedCount} document(s) deleted successfully`);
    })
    .catch(err => {
        console.error('Error:', err);
    })
    .finally(() => {
        mongoose.connection.close(); 
    });