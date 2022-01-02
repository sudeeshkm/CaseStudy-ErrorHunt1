const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sudeeshkm:sudeesh123@cluster0.h3bna.mongodb.net/libraryDb?retryWrites=true&w=majority'); //Part 2 Point 1
const Schema = mongoose.Schema;


const userSchema = new Schema({
    
    uid: String,
    pwd:String
});

const userdata = mongoose.model('userdata',userSchema);

module.exports = userdata;