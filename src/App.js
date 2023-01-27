import React, { Component } from 'react';
import WatchList from './Watchlist';
import Search from "./Search"
import axios from 'axios';
import Remove from './Remove';
import './App.css'

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


  // Asyncronous function that fetches the first result (of many) from the API and stores it in the watchList state
  handleSearch = async (e) => {
    e.preventDefault();
    const searchResults = await axios.get(`https://www.omdbapi.com/?apikey=302d737f&s=${this.state.searchQuery}`);
  
    // Get the imdbID of the selected movie
    const selectedMovie = searchResults.data.Search[0];
    const imdbID = selectedMovie.imdbID;
  
    // Make another API call using the imdbID as a parameter
    const movieDetails = await axios.get(`https://www.omdbapi.com/?apikey=302d737f&i=${imdbID}`);
  
    // Use the response data to update the watchList state and then reset the searchQuery state back to an empty string
    const updatedMovie = {
      ...selectedMovie,
      Plot: movieDetails.data.Plot,
      Ratings: movieDetails.data.Ratings
    }
  
    this.setState({ searchResults: searchResults.data.Search });
    this.setState({ watchList: [...this.state.watchList, updatedMovie] });
    this.setState({ searchQuery: "" })
  };


  // Function that handles the input form
  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }


  // Function that removes a selected film based on its imdbID 
  removeFilm = (imdbID) => {
    const updatedWatchList = this.state.watchList.filter(movie => movie.imdbID !== imdbID);
    this.setState({ watchList: updatedWatchList });
  }
  
  // Function that removes all films stored on the watch list app
  removeAll = () => {
    this.setState( { watchList: [] })
  }
  
  // Function that handles the input for updating the rating, sets the state ratingInput to whatever value the user enters
  handleInputChange = (e) => {
    this.setState({ ratingInput: e.target.value });
  }

  // Function that uses the data from the above function, it checks that the rating is between 0 and 100, 
  // if true it maps through the "watchList" array in the state and finds the film object with a matching "imdbID" property 
  // to the "id" argument passed in. Then, it updates the "Value" property of the film object's "Ratings" array
  // This allows the user to set their own rating of the film.

  handleRatingChange = (e, id) => {
    e.preventDefault();
    const newRating = this.state.ratingInput; 
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



  render() {

    return (
      <div>
        <body>
          <header>Movie Watch List App</header>

        <WatchList className="watchlist"
        data={this.props.data} 
        searchResults={this.state.searchResults} 
        watchList={this.state.watchList}
        removeFilm={this.removeFilm}
        handleRatingChange={this.handleRatingChange}
        handleInputChange={this.handleInputChange}
        newRating={this.state.ratingInput}/>
        <Search className="search"
        searchQuery={this.state.searchQuery} 
        handleSearch={this.handleSearch} 
        handleChange={this.handleChange}/>

        <Remove className="remove" removeAll={this.removeAll}/>
        </body>
      </div>
    );
  }
}

export default App