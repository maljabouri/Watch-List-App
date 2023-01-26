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
      watchList: []
    };
  }

  handleSearch = async (e) => {
    e.preventDefault();
    const result = await axios.get(`http://www.omdbapi.com/?apikey=302d737f&s=${this.state.searchQuery}`)
    this.setState({ searchResults: result.data.Search })
    this.setState({ watchList:[...this.state.watchList, result.data.Search[0]] })
  }

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