const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {
    versionKey: false
});
 const UserModel = mongoose.model('UserSchemaFromBestPractice', userSchema);

 module.exports={
    UserModel
 }
