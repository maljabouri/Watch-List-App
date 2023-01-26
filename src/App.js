import React, { Component } from 'react';
import WatchList from './Watchlist';
import Recommended from "./Recommended";
import Search from "./Search"
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      searchResults: [],
      plot: [],
      watchList: []
    };
  }

  handleSearch = async (e) => {
    e.preventDefault();
    const searchResults = await axios.get(`http://www.omdbapi.com/?apikey=302d737f&s=${this.state.searchQuery}`);
  
    // Get the imdbID of the selected movie
    const selectedMovie = searchResults.data.Search[0];
    const imdbID = selectedMovie.imdbID;
  
    // Make another API call using the imdbID as a parameter
    const movieDetails = await axios.get(`http://www.omdbapi.com/?apikey=302d737f&i=${imdbID}`);
  
    // Use the response data to update the watchList state
    const updatedMovie = {
      ...selectedMovie,
      Plot: movieDetails.data.Plot,
      Ratings: movieDetails.data.Ratings
    }
  
    this.setState({ searchResults: searchResults.data.Search });
    this.setState({ watchList: [...this.state.watchList, updatedMovie] });
  };

  
  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }


  render() {

    return (
      <div>

        <WatchList data={this.props.data} searchResults={this.state.searchResults} watchList={this.state.watchList}/>
        <Recommended />
        <Search 
        searchQuery={this.state.searchQuery} 
        handleSearch={this.handleSearch} 
        handleChange={this.handleChange}/>
        
      </div>
    );
  }
}

export default App;