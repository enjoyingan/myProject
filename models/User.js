const mongoose = require('mongoose');

const collection = 'user';

const userSchema = new mongoose.Schema({
    _id: { type: String },
    patientId: { type: String },
    creationTime: { type: String },
    option: { type: Number },
    consentCode: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    phone: { type: String },
    platform: { type: String },
    type: { type: String },
    salt: { type: String },
    companyName: { type: String },
    departmentName: { type: String },
}, { _id: false });

module.exports = mongoose.model(collection, userSchema);