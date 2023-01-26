import React from "react";

const MovieList = (props) => {
  return (
    <div>
      {props.films.map((film) => {
        return <div>
          <h1>{film.Title}</h1>
          <p>Rating: {film.Ratings[1] ? film.Ratings[1].Value : "No Rating Found"}</p>
          <div className="plot">
          <h3>Description</h3>
          <p>{film.Plot}</p>
          </div>
        </div>
      })}
    </div>
  );
}

export default MovieList