import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  shuffle = () => {
    let temp = this.state.images.slice();

    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ images: temp });
  }

  // Map over this.state.images and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>images List</Title>
        {this.state.images.map(image => (
          <FriendCard
            shuffle={this.shuffle}
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