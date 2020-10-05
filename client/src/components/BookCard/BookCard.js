import React, { useContext } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Col, Row,
} from 'reactstrap';
// import BookCardContext from '../../utils/BookCardContext'


const BookCard = books => {

    // const {
    //     bookid,
    //     title,
    //     authors,
    //     publisher,
    //     publishedDate,
    //     description,
    //     imageLinks,
    //     infoLink,
    // } = useContext(BookCardContext)
    
    return (
        <>
            <Card>
                <Row>
                    <Col sm="3">
                        <CardImg top width="100%" src={books.imageLinks} alt={books.title} />
                    </Col>
                    <Col sm="9">
                        <CardBody>
                            <CardTitle>{books.title}</CardTitle>
                            {books.authors.map(author => <CardSubtitle>{author}</CardSubtitle> )}
                            <CardSubtitle>{books.publisher}</CardSubtitle>
                            <CardSubtitle>{books.publishedDate}</CardSubtitle>
                            <CardText>{books.description}</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default BookCard