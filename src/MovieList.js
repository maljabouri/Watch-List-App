import React from "react";

const MovieList = (props) => {
  return (
    <div>
      {props.films.map((film) => {
        return <div>
          <h1>{film.Title}</h1>
          <p>Rating: {film.Ratings[2] ? film.Ratings[2].Value : "No Rating Found"}</p>
          <div className="plot">
            <h3>Description</h3>
            <p>{film.Plot}</p>
            <button onClick={() => props.removeFilm(film.imdbID)}>Remove Film</button>
            <div>


              <input
                type="number"
                min="0"
                max="100"
                placeholder="Enter new rating"
                id={film.imdbID}
                value={props.newRating} // set the value to the ratingInput state property
                onChange={props.handleInputChange} // call the handleInputChange event handler
              />
              <button onClick={(e) => props.handleRatingChange(e, film.imdbID)}>Submit</button>

            </div>
          </div>
        </div>
      })}
    </div>
  );
}

export default MovieList