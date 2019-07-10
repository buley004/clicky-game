import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0
  };

  //function to shuffle the image order
  shuffle = () => {
    let temp = this.state.images.slice();
    
    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ images: temp });
  }

  //function to check if image has already been clicked and update
  checkImage = (id) => {
    this.state.images.find((arr, i) => {
      //find clicked image in array
      if(arr.id === id) {
        //check if image has been clicked
        if(this.state.images[i].clicked === false) {
          this.state.images[i].clicked = true;
          
          //update score and shuffle array
          this.setState({score: this.state.score + 1});
          this.shuffle();
          return true;
        } else {
          console.log("You lose");
          //call end game function
          this.endGame();
        }
      }
    });
  }

  endGame = () => {
    this.setState({score: 0});
    this.state.images.forEach(image => image.clicked = false);
    this.shuffle();
  }

  // Map over this.state.images and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Score: {this.state.score}</Title>
        {this.state.images.map(image => (
          <FriendCard
            shuffle={this.shuffle}
            checkImage={this.checkImage}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;