import React, { Component } from "react";
import { getWatchlistFilms } from "../redux/actions/watchlistActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WatchlistFilm from "./WatchlistFilm";
import Spinner from "./Spinner";
import { Redirect } from "react-router-dom";

class Watchlist extends Component {
    componentDidMount() {
        this.props.getWatchlistFilms();
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
        }

        const films = this.props.watchlist.films;

        return (
            <main id="watchlist-page" className="narrow-container">
                <h1 className="watchlist-heading">Watchlist</h1>
                {this.props.watchlist.loading ? (
                    <Spinner />
                ) : (
                    <ul className="watchlist">
                        {films.map((film, i) => (
                            <WatchlistFilm film={film} key={i} />
                        ))}
                    </ul>
                )}
            </main>
        );
    }
}

Watchlist.propTypes = {
    getWatchlistFilms: PropTypes.func.isRequired,
    watchlist: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    watchlist: state.watchlist,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getWatchlistFilms })(Watchlist);
