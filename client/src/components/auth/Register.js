import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../redux/actions/authActions";
import "./register.css";

class Register extends Component {
    render() {
        return (
            <div className="register-form-container">
                <h3 className="register-form-header">Register</h3>
                <form className="register-form">
                    <div className="register-form-item">
                        <label className="register-form-label">Email:</label>
                        <input
                            className="register-form-input"
                            type="text"
                        ></input>
                    </div>
                    <div className="register-form-item">
                        <label className="register-form-label">Password:</label>
                        <input
                            className="register-form-input"
                            type="password"
                        ></input>
                    </div>
                    <div className="register-form-item">
                        <label className="register-form-label">
                            Confirm Password:
                        </label>
                        <input
                            className="register-form-input"
                            type="password"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

export default connect(null, { registerUser })(Register);
