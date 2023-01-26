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
      searchResults: []
    };
  }

  handleSearch = async (e) => {
    e.preventDefault();
    const result = await axios.get(`http://www.omdbapi.com/?apikey=302d737f&s=${this.state.searchQuery}`)
    this.setState({ searchResults: result.data.Search })
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }


  render() {

    return (
      <div>

        <WatchList data={this.props.data} searchQuery={this.state.searchQuery} />
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
