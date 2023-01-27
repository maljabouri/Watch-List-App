import React from "react";

const MovieListDetails = ({ film }) => {
  return (
    <div>
      <h1>{film.Title}</h1>
      <p>
        Rating:
        {film.Ratings[2] ? film.Ratings[2].Value : "No Rating Found"}
      </p>
      <div className="plot">
        <h3>Description</h3>
        <p>{film.Plot}</p>
      </div>
    </div>
  );
};

export default MovieListDetails;
