import React, { useState, useEffect } from 'react';

function FilmList() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + '/films')
            .then(response => response.json())
            .then(data => setFilms(data));
    }, []);

    return (
        <div style={{ display: "flex" }}>
            {films.map(film => (
                <div key={film.imdbID} style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '4px'  }}>
                    <h2 style={{ margin: '0 0 10px 0' }}>{film.title} ({film.year})</h2>
                    <p><strong>Genre:</strong> {film.genre}</p>
                    <p><strong>Director:</strong> {film.director}</p>
                    <p><strong>Actors:</strong> {film.actors}</p>
                    <p><strong>Plot:</strong> {film.plot}</p>
                    {/*<img src={film.poster} alt={film.title} style={{ width: '100%', height: 'auto' }} />*/}
                </div>
            ))}
        </div>
    );
}

export default FilmList;