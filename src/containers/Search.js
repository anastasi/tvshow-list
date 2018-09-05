import React, { Component } from 'react'
import './Search.css'
import ShowList from '../components/ShowList'
import { inject, observer } from 'mobx-react'


@inject('ShowStore')
@observer
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
    this.props.ShowStore.searchShow(this.state.query)
    console.log('ITEM',this.state.query)
  }
  render() {
    return(
        <div className="container">
          <h1>Search</h1>
          <form>
            <div className="search-control">
                <input type="search"
                      placeholder="Search the show..." 
                      ref={input => this.search = input}
                      onChange={this.handleInputChange}/>
            </div>
          </form>
          <ShowList />
        </div>
    )
  }
}

export default Search