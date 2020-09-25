const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/booksearch/:search', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
        .then(({ data }) => 
            data.items.map(book => ({
                bookid: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                publisher: book.volumeInfo.publisher,
                publishedDate: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description,
                imageLinks: book.volumeInfo.imageLinks.thumbnail,
                infoLink: book.volumeInfo.infoLink
            }))
        )
        .catch(err => console.log(err))
    .then(book => res.json(book))
    .catch(err => console.log(err))
})


module.exports = router