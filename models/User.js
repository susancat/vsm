const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    email: { type: String, trim: true, index: true, unique: true, sparse: true },
    googleid: String,
    username: String,
    password: String,
    password2: String,
    oldpassword: String,
    newpassword: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    lastLoginDate: Date
});

UserSchema.plugin(passportLocalMongoose);
UserSchema.statics.login = function login(id, callback) {
    return this.findByIdAndUpdate(
        id, 
        { $set : { 'lastLoginDate' : Date.now() }}, 
        { new : true }, 
        callback
    );       
};
module.exports = mongoose.model("User", UserSchema);