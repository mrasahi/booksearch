import { createContext } from 'react'

const ContactContext = createContext({
    search: '',
    handleInputChange: () => { },
    handleSearch: () => { }
})

export default ContactContext