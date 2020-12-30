import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchFilm } from "../redux/actions/homeActions";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        searchTerm: "",
    };

    handleChange = e => {
        this.setState({ searchTerm: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.searchFilm(this.state.searchTerm);
    };

    render() {
        return (
            <header>
                <nav className="navbar">
                    <Link className="navbar-link" to="/">
                        Home
                    </Link>
                    <Link className="navbar-link" to="/watchlist">
                        Watchlist
                    </Link>
                </nav>
                <form onSubmit={this.handleSubmit} id="form">
                    <input
                        type="text"
                        id="search"
                        className="search"
                        placeholder="Enter name of film"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <input
                        className="search-button"
                        type="submit"
                        value="Search"
                    />
                </form>
            </header>
        );
    }
}

Navbar.propTypes = {
    searchFilm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { searchFilm })(Navbar);
