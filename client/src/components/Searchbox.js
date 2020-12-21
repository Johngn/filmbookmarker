import React, { Component } from "react";

export default class Searchbox extends Component {
    render() {
        return (
            <header>
                <form onSubmit={this.props.handleSubmit} id="form">
                    <input
                        type="text"
                        id="search"
                        className="search"
                        placeholder="Search"
                        value={this.props.searchValue}
                        onChange={this.props.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </header>
        );
    }
}
