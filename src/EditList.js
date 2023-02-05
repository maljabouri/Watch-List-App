import React, { useState } from "react";

const EditList = (props) => {
  const [newRating, setNewRating] = useState(0);

  const handleInputChange = (event) => {
    setNewRating(event.target.value);
  };


  return (
    <div>
      <button className="remove-film" onClick={() => props.removeFilm(props.imdbID)}>Remove Film</button>
      <div>
        <input class="rating-input"
          type="number"
          min="0"
          max="100"
          placeholder="Set your own rating"
          value={newRating}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={(e) => props.handleRatingChange(e, props.imdbID, newRating)}>Submit</button>
      </div>
    </div>
  );
};

export default EditList;