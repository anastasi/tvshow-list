import React, { Component } from 'react';

 class Search extends Component {
   state = {
    query:''
   }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  render() {
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
          <p>{this.state.query}</p>
        </div>
    )
  }
}

export default Search;