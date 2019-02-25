import React, { Component } from 'react';
import Film from './Films';

class FilmsList extends Component{
  render() {
    const filmsNodes = this.props.data.map(film =>{
      return <Film key={film.id} url={film.url}>{film.film}</Film>
    })
    return (
      <div className="films-list">
        {filmsNodes}
      </div>
    )
  }
}

export default FilmsList
