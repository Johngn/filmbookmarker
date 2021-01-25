import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <Link className="navbar-link" to="/">
                        Search
                    </Link>
                    <Link className="navbar-link" to="/watchlist">
                        Watchlist
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Navbar;
