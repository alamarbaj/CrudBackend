const mongoose = require('mongoose')
// var autoIncrement = require('mongoose-auto-increment');

const userSchema = mongoose.Schema ({
    Name: String,
    Email:String,
    Salary: Number,
    Designation: String,
},{ collection: "NewCrudeCollection" })


// autoIncrement.initialize(mongoose.connection)
// userSchema.plugin(autoIncrement.plugin,'users')
module.exports = users = mongoose.model("NewCrudeCollection", userSchema);
