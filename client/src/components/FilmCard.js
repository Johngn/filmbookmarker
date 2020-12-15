import React, { Component } from "react";

export default class FilmCard extends Component {
  render() {
    return (
      <div>
        {/* <img src=${IMG_PATH + poster_path} alt=${title}> */}
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>${overview}
        </div>
      </div>
    );
  }
}
