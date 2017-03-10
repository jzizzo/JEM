import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Stream from './components/stream/Stream'
import './App.css';

// home
// signup
// login

class App extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      page: 'home',
      streamers: ['joedosmil', 'toddomg']
    }
  }

  // change page

  changePage(page) {
    // can switch { page: page } to just { page }
    console.log('attempted to change page to ', page)
    this.setState({ page: page })
  }

  // render page

  renderPage(page) {
    if (page === 'home') {
      return <Home prop1='whatever'/>;
    }
    if (page === 'signup') {
      return <Signup />;
    }
    if (page === 'login') {
      return <Login />;
    }
  }

  // show stream



  render() {
    const { page } = this.state;
    const { changePage, renderPage } = this;
    const { streamers } = this.state;
    return (
      <div>
        <div className="App">
          <Nav changePage={changePage.bind(this)} />
          {renderPage(this.state.page)}
          <div>

          {
            streamers.map(function(streamer) {
              return <Stream streamer={streamer} />;
            })
          }
          byeeeeree!!!
          </div>
        </div>
      </div>
    );
  }
}

export default App;