import React, { Component } from "react";
import FilmCard from "./FilmCard";
import { getFilms } from "../actions/filmActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
    state = {
        movies: [],
        defaultURL:
            "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b94b1025e86742975b86c5a81513b54",
    };

    componentDidMount() {
        // this.getMovies(this.state.defaultURL);
        this.props.getFilms();
    }

    render() {
        return (
            <main id="main">
                {this.props.films.map((film, i) => (
                    <FilmCard
                        key={film.id}
                        film={film}
                        // addToList={this.addToList}
                    />
                ))}
            </main>
        );
    }
}

Home.propTypes = {
    getFilms: PropTypes.func.isRequired,
    films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    films: state.films,
});

export default connect(mapStateToProps, { getFilms })(Home);
