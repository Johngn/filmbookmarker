import React, { Component } from "react";
import { getWatchlistFilms } from "../redux/actions/watchlistActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Watchlist extends Component {
    componentDidMount() {
        this.props.getWatchlistFilms();
    }

    render() {
        const films = this.props.watchlist.films;

        return (
            <main id="watchlist">
                {/* <h1 className="watchlist-heading">Watchlist</h1> */}
                <ul className="watchlist">
                    {films.map((film, i) => (
                        <li>
                            <h2 className="watchlist-item">{film.title}</h2>
                        </li>
                    ))}
                </ul>
                {/* {this.props.watchlist} */}
            </main>
        );
    }
}

Watchlist.propTypes = {
    getWatchlistFilms: PropTypes.func.isRequired,
    films: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    watchlist: state.watchlist,
});

export default connect(mapStateToProps, { getWatchlistFilms })(Watchlist);
