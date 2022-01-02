const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sudeeshkm:sudeesh123@cluster0.h3bna.mongodb.net/libraryDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;