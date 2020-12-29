import React, { Component } from "react";
import Searchbox from "./components/Searchbox";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "./components/Home";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Searchbox />
                    <Home />
                </div>
            </Provider>
        );
    }
}
