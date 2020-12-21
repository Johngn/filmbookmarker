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
                    <span className="">{movie.vote_average}</span>
                    <h4>{movie.release_date.slice(0, 4)}</h4>
                </div>
                {/* <div className="overview">
                    <h3>Overview</h3>
                    {movie.overview}
                </div> */}
            </div>
        );
    }
}
