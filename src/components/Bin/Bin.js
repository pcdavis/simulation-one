import React, { Component } from 'react';
import axios from 'axios'

export default class Bin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binInfo: {}
    }

  }

  componentDidMount(props){
    axios.get('http://localhost:3000/api/bins/'+this.props.match.params.number ).then( (response) => {
      this.setState({
        binInfo: response.data
      })
    })
  }

  render() {
    return (
      <div className="bin-layout">
        <h1> {this.state.binInfo.product_name} </h1>
        
      
      </div>
    )
  }
}
