import React, { Component } from 'react';

class Nav extends Component {
  // use constructor to pass down props attached on instantiation of app.js
  constructor(props) {
    // give direct access to props instead of having to type this.something EG( this.state)
    super(props)
    this.state = {

    }
  }
  render() {
    const { changePage } = this.props
    return (
      <div className='Nav'>
      Project JEM
        <div className='buttons'>
          <button onClick={() => changePage('home')} >home</button>
          <button onClick={() => changePage('login')} >login</button>
          <button onClick={() => changePage('signup')} >signup</button>
          </div>
      </div>
    );
  }
}

export default Nav