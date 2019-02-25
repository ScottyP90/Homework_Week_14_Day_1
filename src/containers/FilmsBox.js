import React, { Component } from 'react';
import FilmsList from '../components/FilmsList.js'

class FilmsBox extends Component {
  constructor(props) {
    super(props)
    this.state={
      data: [
        {
          id: 1,
          film: "Spider-Man: Far From Home ",
          url: "https://www.imdb.com/title/tt6320628/?ref_=rlm"
        },
        {
          id: 2,
          film: "Shaft",
          url: "https://www.imdb.com/title/tt4463894/?ref_=rlm"
        },
        {
          id: 3,
          film: "Pokémon Detective Pikachu",
          url: "https://www.imdb.com/title/tt5884052/?ref_=rlm"
        },
        {
          id: 4,
          film: "Hellboy",
          url: "https://www.imdb.com/title/tt2274648/?ref_=rlm"
        }
      ]
    }
  }

  render(){
    return(
      <div className="Film-box">
        <h1>List of New Films</h1>
        <FilmsList data={this.state.data}/>
      </div>
    )
  }
}

export default FilmsBox
