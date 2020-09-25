import React, { useState } from 'react'
import Search from '../../components/Search'
import SearchContext from '../../utils/SearchContext'
import { Col, Row, Container, Jumbotron, Button } from 'reactstrap'
import axios from 'axios'

const Home = () => {

    const [searchState, setSearchState] = useState({
        search: '',
        booksearch: []
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
                setSearchState({ ...searchState, booksearch: data, search: '' })
                console.log(searchState.booksearch)
            })
            .catch(err => console.log(err))
        
    }

    searchState.tester = event => {
        event.preventDefault()
        console.log(searchState.booksearch)
    }

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
                <Button onClick={searchState.tester}>Test states</Button>

                <Row>
                    
                </Row>

            </Container>
        </>
    )
}

export default Home