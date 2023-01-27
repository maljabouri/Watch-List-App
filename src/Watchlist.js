import React from "react";
import MovieList from "./MovieList";

const WatchList = (props) => {
  return (
    <div>
      <MovieList
        films={props.watchList}
        removeFilm={props.removeFilm}
        handleRatingChange={props.handleRatingChange}
        handleInputChange={props.handleInputChange} 
        newRating={props.newRating}
      />
    </div>
  )
}


export default WatchList