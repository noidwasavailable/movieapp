import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, trailer, genres }) {
	const link = { trailer }.trailer;
	let TRAILER_STRING = "https://youtu.be/";
	let TRAILER_DISPLAY = "YouTube Link";
	if (link !== "") {
		TRAILER_STRING += link;
	} else {
		TRAILER_STRING = "Link not found";
		TRAILER_DISPLAY = "Link not found";
	}

	return (
		<div className="movie">
			<img src={poster} alt={title} title={title}></img>
			<div className="movie_data">
				<h3 className="movie_title">{title}</h3>
				<p className="genres">
					{genres.map((genre, index) => (
						<div key={index} className="genres_genreName">
							{genre}
						</div>
					))}
				</p>
				<h5 className="movie_year">{year}</h5>
				<p className="movie_summary">{summary.slice(0, 250)}...</p>

				<a className="movie_trailer" href={TRAILER_STRING}>
					{TRAILER_DISPLAY}
				</a>
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
	trailer: PropTypes.string,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
