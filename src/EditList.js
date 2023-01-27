import React from "react";

const EditList = (props) => {
  return (
    <div>
      <button className="remove-film" onClick={() => props.removeFilm(props.imdbID)}>Remove Film</button>
      <div>
        <input class="rating-input"
          type="number"
          min="0"
          max="100"
          placeholder="Set your own rating"
          value={props.newRating}
          onChange={props.handleInputChange}
        />
        <button className="search-button" onClick={(e) => props.handleRatingChange(e, props.imdbID)}>Submit</button>
      </div>
    </div>
  );
};

export default EditList;
