import React from "react";

const EditList = (props) => {
  return (
    <div>
      <button onClick={() => props.removeFilm(props.imdbID)}>Remove Film</button>
      <div>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="Enter new rating"
          value={props.newRating}
          onChange={props.handleInputChange}
        />
        <button onClick={(e) => props.handleRatingChange(e, props.imdbID)}>Submit</button>
      </div>
    </div>
  );
};

export default EditList;
