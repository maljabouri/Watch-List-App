import React, { Component } from 'react';
import WatchList from './Watchlist';
import Recommended from "./Recommended";
import Search from "./Search"



class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <div>

      <WatchList data={this.props.data} />
      
      <Recommended />
      <Search />


    </div>
  );
}
}

export default App;
