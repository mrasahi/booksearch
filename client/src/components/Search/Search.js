import React, { useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SearchContext from '../../utils/SearchContext'

const Search = () => {

    const {
        handleSearch,
        handleInputChange,
    } = useContext(SearchContext)

    return(
        <>
            <Form>
                <FormGroup>
                    <Label for="book">Book Search:</Label>
                    <Input type="book" name="search" onChange={handleInputChange} placeholder="Harry Potter" />
                </FormGroup>
                <Button onClick={handleSearch}>Search</Button>
            </Form>
        </>
    )
}

export default Search