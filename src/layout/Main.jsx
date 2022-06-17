import React, { Component } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP__API_KEY;
//http://www.omdbapi.com/?i=tt3896198&apikey=4233e7e7

class Main extends Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount(){
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then(response => response.json())
      .then(data=> this.setState({movies: data.Search, loading: false}))
      .catch(err => {
        console.log(err);
        this.setState({loading: false});
      })
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
      .then(response => response.json())
      .then(data=> this.setState({movies: data.Search, loading: false}))
      .catch(err => {
        console.log(err);
        this.setState({loading: false});
      })
  }
  render(){
    const { movies, loading } = this.state;
    return (
      <main className='content container'>
      <Search searchMovies={this.searchMovies}/>
      {
        loading ? <Preloader/> : <Movies movies={movies}/>
      }

      </main>
    )
  }
}

export default  Main