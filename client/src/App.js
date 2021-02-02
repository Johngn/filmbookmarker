import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Alert />
                    <Router>
                        <Navbar />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/watchlist" component={Watchlist} />
                    </Router>
                </div>
            </Provider>
        );
    }
}
