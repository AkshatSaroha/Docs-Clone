const mongoose = require("mongoose")

const DocUserModel = mongoose.Schema({
    username : {
        type :String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    }
})

const docUserModel = mongoose.model("docuser",DocUserModel);

module.exports = docUserModel;