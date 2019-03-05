const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: { type: String, require: true, max: 100 },
    lastName: { type: String, require: true, max: 100 },
    age: { type: Number, require: true },
}); //creation d'un model de donnée pour un user

//export du model afin de pouvoir l'utiliser ailleurs
module.exports = mongoose.model('User', UserSchema);