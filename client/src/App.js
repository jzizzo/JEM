import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import './App.css';

// home
// signup
// login

class App extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      page: 'home'
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

  render() {
    const { page } = this.state;
    const { changePage, renderPage } = this;
    return (
      <div>
        <div className="App">
          <Nav changePage={changePage.bind(this)} />
          {renderPage(this.state.page)}
          byeeeeree!!!
        </div>
      </div>
    );
  }
}

export default App;