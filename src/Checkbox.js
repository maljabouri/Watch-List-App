import React, { useState } from 'react';
import { Form, FormCheck } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';


function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Form.Group>
        <Row>
          <Col className="col-md-11">
            <FormCheck.Label>Seen the film? Mark it as watched, delete it, or even set your own rating for it!</FormCheck.Label>
          </Col>
          <Col>
            <FormCheck type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}/>
          </Col>
        </Row>
      </Form.Group>
    </Container>
  );
}

export default Checkbox;
