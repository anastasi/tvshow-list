import React, { Component } from 'react';

 class Search extends Component {
   constructor() {
     super()
     this.state = {
      query: '',
      shows: [] 
     }
   }
  
  handleInputChange = () => { 
    this.setState({
      query: this.search.value
    })
    const single_show = `http://api.tvmaze.com/search/shows?q=${this.state.query}`
    
    fetch(single_show)
      .then(response => response.json())
      .then(data => {
        this.setState({ shows: data })
      })
  }
  render() {
    const { shows } = this.state;
    return(
        <div>
          <h1>Search</h1>
          <form>
            <div className="search-control">
                <input type="search"
                      placeholder="Search the show..." 
                      ref={input => this.search = input}
                      onChange={this.handleInputChange}/>
            </div>
          </form>

          {this.state.shows.length > 0 &&
            <ul>
              {shows.map(item =>
                <li key={item.show.id}>
                  <h3>{item.show.name}</h3>
                  <p>{item.show.summary}</p>
                  <img src={item.show.image.medium} />
                </li>
              )}
            </ul>
            }
          
        </div>
    )
  }
}

export default Search;