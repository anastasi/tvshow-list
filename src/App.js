import React, { Component } from 'react';
import Search from './containers/Search';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SingleShow from './components/SingleShow';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Search} />
          <Route path="/show/:id" component={SingleShow} />
        </div>
      </Router>
    );
  }
}

export default App;
