import React from "react";

const Remove = (props) => {
  return (
  <div>
     <button type="submit" onClick={props.removeAll}>Remove all films from watchlist</button>
  </div>

  )
}

export default Remove