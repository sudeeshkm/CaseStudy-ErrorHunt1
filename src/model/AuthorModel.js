const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sudeeshkm:sudeesh123@cluster0.h3bna.mongodb.net/libraryDb?retryWrites=true&w=majority'); //Part 2 Point 1
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;