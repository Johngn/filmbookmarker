import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { getFilms } from "../actions/filmActions";
import PropTypes from "prop-types";

class FilmCard extends Component {
    state = {
        defaultURL:
            "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b94b1025e86742975b86c5a81513b54",
        searchURL:
            'https://api.themoviedb.org/3/search/movie?api_key=0b94b1025e86742975b86c5a81513b54&query="',
    };

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // this.getMovies(this.state.searchURL + this.state.searchValue);
    };

    // getMovies = (url) => {
    //     axios
    //         .get(url)
    //         .then((res) => {
    //             console.log(res.data.results);

    //             this.setState({ movies: res.data.results });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // addToList = (e) => {
    //     console.log(e.target.title);
    //     console.log(e.target.id);

    //     axios.post();
    // };

    render() {
        const film = this.props.film;
        return (
            <div className="movie">
                <img
                    src={"http://image.tmdb.org/t/p/w1280" + film.poster_path}
                    alt={film.title}
                ></img>
                <div className="movie-info">
                    <h3>{film.title}</h3>
                    <span>{film.release_date.slice(0, 4)}</span>
                </div>
                <div>
                    <button
                        title={film.title}
                        id={film.id}
                        // onClick={this.props.addToList}
                    >
                        Add
                    </button>
                </div>
                {/* <div className="overview">
                    <h3>Overview</h3>
                    {movie.overview}
                </div> */}
            </div>
        );
    }
}

FilmCard.propTypes = {
    // getFilms: PropTypes.func.isRequired,
    // film: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    // film: state.film,
});

export default connect(mapStateToProps, {})(FilmCard);
