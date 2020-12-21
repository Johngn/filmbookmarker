import React, { Component } from "react";
import axios from "axios";

import Searchbox from "./components/Searchbox";
import FilmCard from "./components/FilmCard";

import "./App.css";

class App extends Component {
    state = {
        searchValue: "",
        defaultURL:
            "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b94b1025e86742975b86c5a81513b54",
        searchURL:
            'https://api.themoviedb.org/3/search/movie?api_key=0b94b1025e86742975b86c5a81513b54&query="',
        movies: [],
    };

    componentDidMount() {
        this.getMovies(this.state.defaultURL);
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.getMovies(this.state.searchURL + this.state.searchValue);
    };

    getMovies = (url) => {
        axios
            .get(url)
            .then((res) => {
                console.log(res.data.results);

                this.setState({ movies: res.data.results });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        const { movies } = this.state;
        return (
            <div className="App">
                <Searchbox
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    getMovies={this.getMovies}
                    searchValue={this.state.searchValue}
                />
                <main id="main">
                    {movies.map((movie, i) => (
                        <FilmCard key={movie.id} movie={movie} />
                    ))}
                </main>
            </div>
        );
    }
}

export default App;
