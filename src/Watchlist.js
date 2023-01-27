import React from "react";
import MovieListDetails from "./MovieListDetails";
import EditList from "./EditList";
import Checkbox from "./Checkbox";
import './App'

const WatchList = (props) => {
  return (
    <div className="watchlist-item">
      {props.watchList.map((film, id) => {
        return (
          <div key={id}>
            <MovieListDetails film={film} />
            <Checkbox />
            <EditList className="edit-list-container"
              film={film}
              imdbID={film.imdbID}
              removeFilm={props.removeFilm}
              handleRatingChange={props.handleRatingChange}
              handleInputChange={props.handleInputChange}
              newRating={props.newRating}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WatchList;
