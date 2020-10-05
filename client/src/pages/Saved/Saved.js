import React, { useState, useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Col, Row, Container, Jumbotron,
} from 'reactstrap';
import axios from 'axios'

const Saved = () => {

    const [savedBooks, setSavedBooks] = useState({
        books: []
    })

    savedBooks.removeBook = books => {
        console.log('Burning book')
        axios.delete(`/api/books/${books._id}`)
            .then(({data}) => {
                let filteredBooks = savedBooks.books.filter(mybooks => mybooks !== books)
                setSavedBooks({ ...savedBooks, books: filteredBooks })
                console.log(filteredBooks)
                console.log('Book has burned')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('/api/books')
            .then(({data}) => {
                console.log(data)
                setSavedBooks({ ...savedBooks, books: data })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Saved Page</h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    {
                        savedBooks.books.length > 0 ? (
                            savedBooks.books.map(books => (
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
                                                <Button onClick={() => savedBooks.removeBook(books)}>Remove from collection</Button>
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

export default Saved