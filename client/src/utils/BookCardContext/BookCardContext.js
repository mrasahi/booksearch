import { createContext } from 'react'

const BookCardContext = createContext({
    bookid: '',
    title: '',
    authors: '',
    publisher: '',
    publishedDate: '',
    description: '',
    imageLinks: '',
    infoLink: '',
})

export default BookCardContext