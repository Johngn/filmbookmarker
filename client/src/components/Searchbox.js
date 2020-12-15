import React, { Component } from "react";

class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      search_url:
        'https://api.themoviedb.org/3/search/movie?api_key=0b94b1025e86742975b86c5a81513b54&query="',
    };
  }

  componentDidMount() {
    console.log("test");
  }

  render() {
    return (
      <header>
        <form onSubmit={this.props.handleSubmit} id="form">
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search"
            value={this.state.value}
            onChange={this.props.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </header>
    );
  }
}

export default Searchbox;
