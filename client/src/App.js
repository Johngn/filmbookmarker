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
import { loadUser } from "./redux/actions/authActions";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

export default class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

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
