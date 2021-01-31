import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../redux/actions/authActions";
import "./register.css";

class Register extends Component {
    state = {
        email: "",
        password1: "",
        password2: "",
    };

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    registerUser = e => {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2,
        };

        this.props.registerUser(newUser);
    };

    render() {
        return (
            <div className="register-form-container">
                <h3 className="register-form-header">Register</h3>
                <form onSubmit={this.registerUser} className="register-form">
                    <div className="register-form-item">
                        <label className="register-form-label">Email:</label>
                        <input
                            name="email"
                            value={this.state.email}
                            onChange={this.inputChange}
                            className="register-form-input"
                            type="text"
                        ></input>
                    </div>
                    <div className="register-form-item">
                        <label className="register-form-label">Password:</label>
                        <input
                            name="password1"
                            value={this.state.password1}
                            onChange={this.inputChange}
                            className="register-form-input"
                            type="password"
                        ></input>
                    </div>
                    <div className="register-form-item">
                        <label className="register-form-label">
                            Confirm Password:
                        </label>
                        <input
                            name="password2"
                            value={this.state.password2}
                            onChange={this.inputChange}
                            className="register-form-input"
                            type="password"
                        ></input>
                    </div>
                    <div className="register-form-item">
                        <button className="register-form-button">Submit</button>
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
