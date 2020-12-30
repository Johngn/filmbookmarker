import React, { Component } from "react";
import { connect } from "react-redux";
import { addFilm } from "../redux/actions/watchlistActions";
import PropTypes from "prop-types";
import { setAlert } from "../redux/actions/watchlistActions";

class FilmCard extends Component {
    addToList = e => {
        e.preventDefault();

        const newFilm = {
            title: this.props.film.title,
            year: this.props.film.release_date.slice(0, 4),
            id: this.props.film.id,
            overview: this.props.film.overview,
        };

        this.props.addFilm(newFilm);
    };

    render() {
        const film = this.props.film;

        return (
            <div className="filmcard">
                <img
                    src={"http://image.tmdb.org/t/p/w1280" + film.poster_path}
                ></img>
                <div className="filmcard-info">
                    <p>
                        {film.title} ({film.release_date.slice(0, 4)})
                    </p>
                    <button
                        className="filmcard-add-button"
                        onClick={this.addToList}
                    >
                        ADD TO WATCHLIST
                    </button>
                </div>
            </div>
        );
    }
}

FilmCard.propTypes = {
    addFilm: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { addFilm, setAlert })(FilmCard);
