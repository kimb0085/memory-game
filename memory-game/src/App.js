import React, {Component} from "react";
import "./App.css";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";


class App extends Component {

  state = {
    message: "Click on any animal to begin!",
	images: images,
	clickedImg: [],
	currentScore: 0,	
	topScore: 0
  };

  selectedImage = id => {
    const clickedImg = this.state.clickedImg;
    if (clickedImg.indexOf(id) === -1) {
      clickedImg.push(id);
      this.setState({
        clickedImg: clickedImg,
        currentScore: this.state.currentScore + 1
      });
      if (this.state.currentScore >= this.state.topScore) {
        this.setState({ topScore: this.state.currentScore + 1});
      }
    }
    else {
      this.setState({
        currentScore: 0,
        clicked: [],
        comments: "Shoot! You lost! Give it another shot, I know you can do it!"
      }, this.reset());
    }
    this.gameOver();
  }

  gameOver() {
    if (this.state.currentScore === 12 ) {
      this.setState({
        comments: "Whoop whoop! You've won!"
      }).then(() => {
        this.setState({
	        message: "Click on any animal to begin!",
			images: images,
			clickedImg: [],
			currentScore: 0,	
			topScore: 0
        });
      })
    }
  }

  reset() {
    setTimeout(() => {4000});
  }


  render() {
    return (
      <Wrapper>
        <Navigation
        	currentScore={this.currentScore}
        	topScore={this.topScore}
         />
	      	<Title />
	        {this.state.images.map(image => (
	          <ImageCard
	            id={image.id}
	            key={image.id}
	            name={image.name}
	            image={image.image}
	            selectedImage={this.selectedImage}
	          />	          
	        ))}
      </Wrapper>
    );
  }
}

 export default App;