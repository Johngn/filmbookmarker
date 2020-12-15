import React, { Component } from "react";
import axios from "axios";

import Searchbox from "./components/Searchbox";

import "./App.css";

class App extends Component {
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    // console.log(this.state.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("A name was submitted: " + this.state.value);

    if (this.state.value && this.state.value !== "") {
      console.log(this.state.value);
      this.getMovies(this.state.search_url + this.state.value);

      this.setState({ search_url: "" });
    } else {
      window.location.reload();
    }
  };

  getMovies = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results[0].original_title);

        this.setState({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Searchbox
          props={(this.handleChange, this.handleSubmit, this.getMovies)}
        />
      </div>
    );
  }
}

export default App;
