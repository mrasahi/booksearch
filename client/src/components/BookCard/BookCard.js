import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Col, Row,
} from 'reactstrap';
import BookCardContext from '../../utils/BookCardContext'


const BookCard = props => {

    const {
    } = useContext(BookCardContext)
    
    return (
        <>
            <Card>
                <Row>
                    <Col sm="3">
                        <CardImg top width="100%" src={props.imageLink} alt={props.title} />
                    </Col>
                    <Col sm="9">
                        <CardBody>
                            <CardTitle>{props.title}</CardTitle>
                            <CardSubtitle>{props.subtitle}</CardSubtitle>
                            <CardSubtitle>{props.publisher}</CardSubtitle>
                            <CardSubtitle>{props.publishedDate}</CardSubtitle>
                            <CardText>{props.description}</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default BookCard