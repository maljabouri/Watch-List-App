import React from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";


const WatchList = (props) => {
  return (
    <div>
      <MovieList films={props.watchList}/>
      <MovieDetails filmDetails={props.details}/>
    </div>
  )
}


export default WatchList