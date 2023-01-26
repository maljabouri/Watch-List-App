import React from "react";

const Search = (props) => {
  return (
  <div>
    <form onSubmit={props.handleSearch}>
    <input type="text" 
    value={props.searchQuery}
    onChange={props.handleChange}/>

    <button type="submit">Search</button>
    </form>
  </div>

  )
}

export default Search