import React, { Component } from "react";

export default class FilmCard extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <div className="movie">
                <img
                    src={"http://image.tmdb.org/t/p/w1280" + movie.poster_path}
                    alt={movie.title}
                ></img>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <span>{movie.release_date.slice(0, 4)}</span>
                </div>
                <div>
                    <button
                        title={movie.title}
                        id={movie.id}
                        onClick={this.props.addToList}
                    >
                        Add
                    </button>
                </div>
                {/* <div className="overview">
                    <h3>Overview</h3>
                    {movie.overview}
                </div> */}
            </div>
        );
    }
}
