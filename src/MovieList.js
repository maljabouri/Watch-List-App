import React from "react";

const MovieList = (props) => {
  return (
      <ul>
          {props.films.map((film, index) => {
              return <li key={index}>{film.Title}</li>
          })}
      </ul>
  );
}

export default MovieList