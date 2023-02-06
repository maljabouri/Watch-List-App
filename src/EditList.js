import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from 'react-bootstrap';

const EditList = (props) => {
  const [newRating, setNewRating] = useState("");

  const handleInputChange = (event) => {
    setNewRating(event.target.value);
  };


  return (
    <Container>
      <Row>

        <Col className="col-md-9">
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              min="0"
              max="100"
              placeholder="Set your own rating"
              value={newRating}
              onChange={handleInputChange}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2" />
            <Button variant="outline-success"
              onClick={(e) => props.handleRatingChange(e, props.imdbID, newRating)}>Submit</Button>
          </InputGroup>
        </Col>

        <Col>
          <Button variant="outline-danger"
            onClick={() => props.removeFilm(props.imdbID)}>Remove Film</Button>
        </Col>
      </Row>

    </Container>
  );
};

export default EditList;

