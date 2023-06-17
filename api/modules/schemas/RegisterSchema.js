const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mongoRegistration = new Schema({
    password: {
        type: String,
        required:[true,"password can not be empty"],
    },
    walletAddress: {
        type: String,
        required:[true , "address is required"],  
    },
    privateKey: {
        type: String,
        required:[true , "Private key can not be empty"],
    },
    seedPhrase: {
        type: String,
        required:[true ,"Seed Phrase can not be empty"],
    }
})

module.exports = mongoose.model("mongoRegistration" , mongoRegistration);