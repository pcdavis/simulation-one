import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="box">
    
    <div className="shelf-box" ><Link to='/shelf/a'> Shelf A </Link></div>
    <div className="shelf-box" ><Link to='/shelf/b'> Shelf B </Link></div>
    <div className="shelf-box" ><Link to='/shelf/c'> Shelf C </Link></div>
    <div className="shelf-box" ><Link to='/shelf/d'> Shelf D </Link></div>

      </div>
    );
  }
}
