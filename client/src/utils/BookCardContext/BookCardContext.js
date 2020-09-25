import { createContext } from 'react'

const ContactContext = createContext({
    bookid: '',
    title: '',
    authors: [],
    publisher: '',
    publishedDate: '',
    description: '',
    imageLink: '',
    infoLink: '',
})

export default ContactContext