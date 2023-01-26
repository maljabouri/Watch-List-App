import React from "react";

const MovieList = (props) => {
  return (
    <ul>
      {props.films.map((film, index) => {
        return <div>
          <li key={index}>{film.Title}</li>
          <p>Rating: {film.Ratings[1].Value}</p>
          <div class="plot">
          <h3>Description</h3>
          <p>{film.Plot}</p>
          </div>
        </div>
      })}
    </ul>
  );
}

export default MovieList