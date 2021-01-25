import React, { Component } from "react";
import FilmCard from "./FilmCard";
import { getDefaultFilms } from "../redux/actions/homeActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import Searchbox from "./Searchbox";

class Home extends Component {
    componentDidMount() {
        this.props.getDefaultFilms();
    }

    render() {
        const films = this.props.films.films;

        return (
            <div className="container">
                <Searchbox />
                <main id="home">
                    {this.props.films.loading ? (
                        <Spinner />
                    ) : (
                        films.map((film, i) => (
                            <FilmCard key={film.id} film={film} />
                        ))
                    )}
                </main>
            </div>
        );
    }
}

Home.propTypes = {
    getDefaultFilms: PropTypes.func.isRequired,
    films: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    films: state.films,
});

export default connect(mapStateToProps, { getDefaultFilms })(Home);
