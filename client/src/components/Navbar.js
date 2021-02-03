import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../redux/actions/authActions";

class Navbar extends Component {
    componentDidMount() {
        console.log(this.props.location.pathname);
    }

    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <header>
                <nav className="navbar">
                    {isAuthenticated ? (
                        <div>
                            <Link className="navbar-link" to="/">
                                Search
                            </Link>
                            <Link className="navbar-link" to="/watchlist">
                                Watchlist
                            </Link>
                        </div>
                    ) : (
                        ""
                    )}

                    {isAuthenticated ? (
                        <div>
                            <a
                                onClick={this.props.logout}
                                className="navbar-link"
                                href="#!"
                            >
                                Logout
                            </a>
                        </div>
                    ) : (
                        <div style={{ marginLeft: "auto" }}>
                            <Link className="navbar-link" to="/register">
                                Register
                            </Link>
                            <Link className="navbar-link" to="/login">
                                Login
                            </Link>
                        </div>
                    )}
                </nav>
            </header>
        );
    }
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
