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
      watchList: [],
      ratingInput: ""
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
    this.setState({ searchQuery: "" })
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  removeFilm = (imdbID) => {
    const updatedWatchList = this.state.watchList.filter(movie => movie.imdbID !== imdbID);
    this.setState({ watchList: updatedWatchList });
  }

  handleRatingChange = (e, id) => {
    e.preventDefault();
    const newRating = this.state.ratingInput; //use the value from the state instead of the props
    if(newRating < 0 || newRating > 100) {
      alert("Please enter a value between 0 and 100");
    } else {
      const updatedWatchList = this.state.watchList.map(film => {
        if(film.imdbID === id) {
          film.Ratings[2].Value = newRating+"/100";
        }
        return film;
      });
      this.setState({ watchList: updatedWatchList });
      this.setState({ ratingInput: ""})
      
    }
    

  }


  handleInputChange = (e) => {
    this.setState({ ratingInput: e.target.value });
  }
  render() {

    return (
      <div>

        <WatchList 
        data={this.props.data} 
        searchResults={this.state.searchResults} 
        watchList={this.state.watchList}
        removeFilm={this.removeFilm}
        handleRatingChange={this.handleRatingChange}
        handleInputChange={this.handleInputChange}
        newRating={this.state.ratingInput}/>
        <Recommended />
        <Search 
        searchQuery={this.state.searchQuery} 
        handleSearch={this.handleSearch} 
        handleChange={this.handleChange}/>
        
      </div>
    );
  }
}

export default App