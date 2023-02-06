import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';

const MovieListDetails = ({ film }) => {
  return (<div>
    <Accordion>
      <Accordion.Item eventKey={film.index}>
        <Accordion.Header>{film.Title}</Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col>
                <div className="plot">
                  <h3>Description</h3>
                  <p>{film.Plot}</p>
                  Rating: {film.Ratings[2] ? film.Ratings[2].Value : "No Rating Found"}
                </div>
              </Col>
              <Col>
                <img src={film.Poster} />
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  </div>
  );
};

export default MovieListDetails;
