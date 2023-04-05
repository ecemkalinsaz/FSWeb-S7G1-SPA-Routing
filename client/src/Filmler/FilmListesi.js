import React from 'react';
import {useHistory} from 'react-router-dom';

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movieObject => (
        <FilmDetayları key={movieObject.id} movie={movieObject} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  // const title = props.movie.title
  // const id = props.movie.id
  // ...

  const { id, title, director, metascore } = props.movie;
  const history = useHistory();
  return (
    <div className="movie-card" onClick={() => history.push('/filmler/' + id)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
