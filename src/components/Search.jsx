import React, { Component } from 'react'
import Radio from './Radio';

const radioButtons = [
  {
    name: 'All',
    type: 'all'
  },
  {
    name: 'Movies only',
    type: 'movie'
  },
  {
    name: 'Series Only',
    type: 'series'
  }
];

class Search extends Component {
  state = {
    searchInput: 'matrix',
    type: 'all'
  }
  handleKey = (e) => {
    if(e.key === 'Enter'){
      this.props.searchMovies(this.state.searchInput, this.state.type)
    }
  }
  handleFilter = (e) => {
    this.setState(
      ()=>({type: e.target.dataset.type}),
      () => {this.props.searchMovies(this.state.searchInput, this.state.type)
      }
    )
  }
  render() {
    const { searchInput } = this.state;
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="search"
              type="search"
              className="validate"
              placeholder='Search'
              value={searchInput}
              onChange={e=> this.setState({searchInput: e.target.value})}
              onKeyDown={this.handleKey}
              />
              <button
                className="btn search-btn"
                onClick={()=>this.props.searchMovies(this.state.searchInput, this.state.type)}
              >Search</button>
          </div>
          <div className='radio-labels'>
            { radioButtons.map(btn => (
              <Radio
                key={btn.type}
                name={btn.name}
                type={btn.type}
                handleFilter={this.handleFilter}
                stateType={this.state.type}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Search