import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchFilm } from "../actions/homeActions";

class Searchbox extends Component {
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
                <form onSubmit={this.handleSubmit} id="form">
                    <input
                        type="text"
                        id="search"
                        className="search"
                        placeholder="Search"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </header>
        );
    }
}

Searchbox.propTypes = {
    searchFilm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { searchFilm })(Searchbox);
