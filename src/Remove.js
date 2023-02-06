import React from "react";
import { Button } from 'react-bootstrap';

const Remove = (props) => {
  return (
  <div>
     <Button variant="danger" type="submit" onClick={props.removeAll}>Remove all films from watchlist</Button>
  </div>

  )
}

export default Remove