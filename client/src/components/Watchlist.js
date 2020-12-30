import React, { Component } from "react";
import { getWatchlistFilms } from "../redux/actions/watchlistActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WatchlistFilm from "./WatchlistFilm";
import Spinner from "./Spinner";

class Watchlist extends Component {
    componentDidMount() {
        this.props.getWatchlistFilms();
    }

    render() {
        const films = this.props.watchlist.films;

        return (
            <main id="watchlist-page">
                {/* <h1 className="watchlist-heading">Watchlist</h1> */}
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
};

const mapStateToProps = state => ({
    watchlist: state.watchlist,
});

export default connect(mapStateToProps, { getWatchlistFilms })(Watchlist);
