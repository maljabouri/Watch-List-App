import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

const Search = (props) => {
  return (
    <Container>
      <Row>
      <h1>Search for a film to add it to your watchlist! If you can't find what you're looking for, try to be more specific!</h1>
      </Row>
      <Row>
      <form className="search-form" onSubmit={props.handleSearch}>
        
        
        <InputGroup>
          <FormControl
            type="text"
            value={props.searchQuery}
            onChange={props.handleChange}
            placeholder="Enter film name"
          />
            <Button variant="primary" type="submit" onClick={props.clearForm}>
              Search
            </Button>
        </InputGroup>
      </form>
    </Row>
    </Container>
  );
};

export default Search;
