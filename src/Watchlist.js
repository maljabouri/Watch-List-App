import React from "react";
import MovieListDetails from "./MovieListDetails";
import EditList from "./EditList";
import Checkbox from "./Checkbox";

const WatchList = (props) => {
  return (
    <div>
      {props.watchList.map((film, id) => {
        return (
          <div key={id}>
            <MovieListDetails film={film} />
            <EditList
              film={film}
              imdbID={film.imdbID}
              removeFilm={props.removeFilm}
              handleRatingChange={props.handleRatingChange}
              handleInputChange={props.handleInputChange}
              newRating={props.newRating}
            />
            <Checkbox />
          </div>
        );
      })}
    </div>
  );
};

export default WatchList;
