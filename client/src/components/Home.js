import React, { Component } from "react";
import FilmCard from "./FilmCard";
import { getDefaultFilms } from "../actions/homeActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
    componentDidMount() {
        this.props.getDefaultFilms();
    }

    render() {
        const films = this.props.films.films;

        return (
            <main id="main">
                {films.map((film, i) => (
                    <FilmCard key={film.id} film={film} />
                ))}
            </main>
        );
    }
}

Home.propTypes = {
    getDefaultFilms: PropTypes.func.isRequired,
    films: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    films: state.films,
});

export default connect(mapStateToProps, { getDefaultFilms })(Home);
