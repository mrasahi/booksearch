const { model, Schema } = require('mongoose')

const Book = new Schema({
  bookid: String,
  title: String,
  authors: [
      String
  ],
  publisher: String,
  publishedDate: String,
  description: String,
  imageLink: String,
  infoLink: String
})

module.exports = model('Book', Book)