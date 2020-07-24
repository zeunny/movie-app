import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state 를 쓰지 않을 경우에는 class component 를 가지지 않아도 됨
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      {/* title 을 지정하면 그림에 마우스를 올렸을 때 title 이 나옴 */}
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key="index" className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
