import React from "react";
import MovieList from "./MovieList";

const WatchList = (props) => {
  return (
    <div>
      <MovieList films={props.watchList}/>
    </div>
  )
}


export default WatchList