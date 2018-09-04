import React, { Component } from 'react';
import { Button, Card, CardTitle, Row, Col } from 'react-materialize';
import './Search.css';
import { Icon } from 'react-materialize';
import ReadMoreReact from 'read-more-react';

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

          {this.state.shows.length > 0 &&
            <div>
                {shows.map(item =>
                <div key={item.show.id}>
              <Row>
                <Col l={12} s={12}>
                  <Card className="ShowCard hide-on-small-only" horizontal header={<CardTitle image={item.show.image.medium}></CardTitle>} actions={[<Button waves='light' node='a' className="right ShowButton" href='#'>Play<Icon medium right className="PlayIcon">play_arrow</Icon></Button>]}>
                      <h5>{item.show.name}</h5>
                      <ReadMoreReact  text={item.show.summary}
                                      min={80}
                                      ideal={200}
                                      max={300}/>
                      
                  </Card>
                  <Card className="ShowCard hide-on-large-only hide-on-medium-only" header={<CardTitle reveal image={item.show.image.medium} waves='light'/>}
                      title={item.show.name}
                      reveal={<p className="ShowSummarySmall">{item.show.summary}<Col s={12}><Button waves='light' node='a' className="ShowButton" href='#'>Play<Icon medium right className="PlayIcon">play_arrow</Icon></Button></Col></p>}>
                      
                  </Card>
                </Col>
                    
             </Row>
              </div>

                )}
            </div>
          }
          
        </div>
    )
  }
}

export default Search;