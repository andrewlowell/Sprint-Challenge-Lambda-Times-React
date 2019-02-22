import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedImage: 0,
      images: []
    }
  }
  componentDidMount(){
    this.setState({images: carouselData})
  }

  returnNextLeft = current => {
    switch(current) {
      case 0:
        return this.state.images.length - 1;
      default:
        return (current - 1);
    }
  }

  returnNextRight = current => {
    switch(current) {
      case (this.state.images.length - 1):
        return 0;
      default:
        return (current + 1);
    }
  }

  leftClick = () => {
    this.setState({selectedImage: this.returnNextLeft(this.state.selectedImage)});
  }

  rightClick = () => {
    this.setState({selectedImage: this.returnNextRight(this.state.selectedImage)});
  }

  selectedImage = () => {
    console.log(this.state.images[this.state.selectedImage]);
    return <img src={this.state.images[this.state.selectedImage]} style={{display: 'block'}} alt="remove warning" />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}