import React from "react";

function MovieCard ({movie, addMovie}) {
    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" />
                <h3>{movie.original_title}</h3>
            </div>
            <button onClick={() => {
                console.log('clicked')
                addMovie(movie)}}>Add to List</button>
        </div>
    )
}

export default MovieCard;