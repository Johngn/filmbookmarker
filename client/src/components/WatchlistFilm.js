import React, { Component } from "react";
import { deleteWatchlistFilm } from "../redux/actions/watchlistActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class WatchlistFilm extends Component {
    state = {
        overview: false,
    };

    showOverview = () => {
        this.setState({ overview: !this.state.overview });
    };

    deleteWatchlistFilm = e => {
        this.props.deleteWatchlistFilm(e.target.value);
    };

    render() {
        const film = this.props.film;

        return (
            <li className="watchlist-list-item">
                <div className="watchlist-item-main">
                    <h3
                        onClick={this.showOverview}
                        className="watchlist-item-title"
                    >
                        {film.title} ({film.year})
                    </h3>
                    <button
                        value={film._id}
                        onClick={this.deleteWatchlistFilm}
                        className="watchlist-delete-button"
                    >
                        Remove
                    </button>
                </div>
                {this.state.overview ? (
                    <div>
                        <p>{film.overview}</p>
                    </div>
                ) : (
                    ""
                )}
            </li>
        );
    }
}

WatchlistFilm.propTypes = {
    deleteWatchlistFilm: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { deleteWatchlistFilm })(WatchlistFilm);
