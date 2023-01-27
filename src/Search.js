import React from "react";

const Search = (props) => {
  return (
  <div>
    <h1>Search for a film to add it to your watchlist!</h1>
    <form className="search-form" onSubmit={props.handleSearch}>
    <input type="text" className="search-input"
    value={props.searchQuery}
    onChange={props.handleChange}/>

    <button className="search-button" type="submit" onClick={props.clearForm}>Search</button>
    </form>
  </div>

  )
}

export default Search