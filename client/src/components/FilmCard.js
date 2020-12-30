import React, { Component } from "react";
import { connect } from "react-redux";
import { addFilm } from "../redux/actions/watchlistActions";
import PropTypes from "prop-types";

class FilmCard extends Component {
    componentDidMount() {
        console.log(this.props.film);
    }

    addToList = e => {
        e.preventDefault();

        const newFilm = {
            title: this.props.film.title,
            year: this.props.film.release_date.slice(0, 4),
            id: this.props.film.id,
            overview: this.props.film.overview,
        };

        console.log(newFilm);

        this.props.addFilm(newFilm);
    };

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
                    <button onClick={this.addToList}>Add</button>
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
    addFilm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addFilm })(FilmCard);
