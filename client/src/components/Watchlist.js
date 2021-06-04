import React, { Component } from 'react';
import { getWatchlistFilms } from '../redux/actions/watchlistActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WatchlistFilm from './WatchlistFilm';
import Spinner from './Spinner';

class Watchlist extends Component {
    componentDidMount() {
        this.props.getWatchlistFilms(this.props.userID);
    }

    render() {
        const films = this.props.watchlist.films;

        return (
            <main id="watchlist-page" className="narrow-container">
                <h1 className="watchlist-heading">Watchlist</h1>
                {this.props.watchlist.loading ? (
                    <Spinner />
                ) : films.length > 0 ? (
                    <ul className="watchlist">
                        {films.map((film, i) => (
                            <WatchlistFilm film={film} key={i} />
                        ))}
                    </ul>
                ) : (
                    <div className="watchlist-empty-container">
                        <h3 className="watchlist-emtpy-text">
                            No films on watchlist. Go to search page to find
                            films to add.
                        </h3>
                    </div>
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
    userID: state.auth.user._id,
});

export default connect(mapStateToProps, { getWatchlistFilms })(Watchlist);
