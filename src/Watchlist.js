import react, { Component } from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";


class WatchList extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: this.props.data.Title,
      details: this.props.data.Plot
    }
  }
  render() {
  return (
    <div>
      <MovieList filmTitle={this.state.title}/>
      <MovieDetails filmDetails={this.state.details}/>
    </div>
  )
}
}

export default WatchList