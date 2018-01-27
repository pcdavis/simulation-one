import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import routes from './routes'
import logo from './assets/logo.png'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: 'SHELFIE'
    }
  }

  render() {
    return (
    <div className="App">

        <div className="wrapper">

            <nav className='nav'>
                <div className='link-wrap'>
                    <Link className='links logo' to='/'> <img alt='logo' src={logo} /> </Link>
                </div>
                <div className="header-text">{this.state.header}</div> 
              </nav>

        

              <div className="main-view">
                { routes }
              </div>
        </div> 
    </div>
    );
  }
}

export default App;
