import React, { useState, useEffect } from 'react'
import Search from '../../components/Search'
// import BookCard from '../../components/BookCard'
import SearchContext from '../../utils/SearchContext'
// import BookCardContext from '../../utils/BookCardContext'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Col, Row, Container, Jumbotron,
} from 'reactstrap';
import axios from 'axios'

const Home = () => {

    const [searchState, setSearchState] = useState({
        search: '',
        booksearch: [],
        myBooks: []
    })


    searchState.handleInputChange = event => {
        setSearchState({ ...searchState, [event.target.name]: event.target.value })
    }

    searchState.handleSearch = event => {
        event.preventDefault()
        console.log('do the search')
        axios.get(`/api/booksearch/${searchState.search}`)
            .then(({ data }) => {
                console.log(data)
                let myBooks = searchState.myBooks
                let filteredData = data.filter(filter => !myBooks.includes(filter.bookid))
                console.log(filteredData)
                setSearchState({ ...searchState, booksearch: filteredData, search: '' })
                console.log(searchState.booksearch)
            })
            .catch(err => console.log(err))
    }

    searchState.saveBook = book => {
        console.log(book)
        let newBookState = searchState.booksearch.filter(filter => filter !== book)
        console.log(newBookState)
        setSearchState({ ...searchState, booksearch: newBookState })
        axios.post(`/api/books`, book)
            .then(({data}) => {
                console.log(`book saved`)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`/api/books`)
            .then(({data}) => {
                console.log(data)
                setSearchState({ ...searchState, myBooks: data.map(id => id.bookid) })
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Home Page</h1>
                            <SearchContext.Provider value={searchState}>
                                <Search />
                            </SearchContext.Provider>
                        </Jumbotron>
                    </Col>
                </Row>
                {/* <button onClick={() => console.log(searchState)}>Check States</button> */}

                <Row>
                    {
                        searchState.booksearch.length > 0 ? (
                            searchState.booksearch.map(books => (
                                <Card>
                                    <Row>
                                        <Col sm="3">
                                            <CardImg top width="100%" src={books.imageLinks} alt={books.title} />
                                        </Col>
                                        <Col sm="9">
                                            <CardBody>
                                                <CardTitle>{books.title}</CardTitle>
                                                {books.authors.map(author => <CardSubtitle>{author}</CardSubtitle>)}
                                                <CardSubtitle>{books.publisher}</CardSubtitle>
                                                <CardSubtitle>{books.publishedDate}</CardSubtitle>
                                                <CardText>{books.description}</CardText>
                                                <Button onClick={() => searchState.saveBook(books)}>Add to collection</Button>
                                                <p>
                                                    <a target="_blank" href={books.infoLink}>More info</a>
                                                </p>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>))
                        ) : null
                    }

                </Row>

            </Container>
        </>
    )
}

export default Home