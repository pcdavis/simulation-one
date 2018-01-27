import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class ShelfList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bins: []
    }

  }
  //+this.props.match.params.letter   below is a test with letter a

  componentDidMount(props){
    axios.get('http://localhost:3000/api/bins3?letter='+this.props.match.params.letter ).then( (response) => {
      console.log(response.data);
      this.setState({
        bins: response.data
      }, console.log(this.state.bins))})
  }

  

  

  render() {
    let BinsToDisplay = this.state.bins.map( (bin, i) => ( 
        //  <li>{bin.first_name}</li>
      <div className="bin-box">
        <Link key={i}  to={'/bin/'+ bin.bin_number}  > 
            <h1>Bin {bin.bin_number} </h1>
        </Link>
      </div>
      )
  );

    console.log(this.state.students)
    return (
      <div className="shelf-list">
       
        { BinsToDisplay }
      </div>
    )
  }
}