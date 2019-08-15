import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

function Movie({id, title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie-data">
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <ul className="movie-genres">
                    {genres.map((genre, index) => (<li key={index}>{genre}</li>))}
                </ul>    
                <p className="movie-summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;