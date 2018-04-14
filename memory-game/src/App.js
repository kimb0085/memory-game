import React, {Component} from "react";
import "./App.css";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        currentScore: 0,
        images: images,
        unselected: images
    }

    componentDidMount() {
    }

    shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectImage = id => {
        const image = this.state.unselected.find(item => item.id === id);

        if(image === undefined) {
            // failure to select a new image
            this.setState({ 
                message: "Shoot! You lost!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                images: images,
                unselected: images
            });
        }
        else {
            // success to select a new image
            const newImages = this.state.unselected.filter(item => item.id !== id);
            
            this.setState({ 
                message: "Whoop whoop! Keep guessing!!",
                currentScore: this.state.currentScore + 1,
                images: images,
                unselected: newImages
            });
            this.gameOver();
        } 

        this.shuffle(images);
    };

    gameOver() {
    if (this.state.currentScore === 12 ) {
      this.setState({
        message: "Hey-o! Nice work! You've won!"
      }).then(() => {
        this.setState({
	        message: "Click on any animal to begin!",
			images: images,
			clickedImg: [],
			currentScore: 0,	
			topScore: 0
        });
      });
    }
  }

    render() {
        return (
            <Wrapper>
                <Navigation
                    message={this.state.message}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.images.map(image => (
                        <ImageCard
                        	key={image.id}
                        	id={image.id}
                        	name={image.name}
                        	image={image.image}
                        	selectImage={this.selectImage}
                        	currentScore={this.currentScore}
                        />
                    ))}
            </Wrapper>
        );
    }
}


export default App;

// class App extends Component {

//   state = {
//     message: "Click on any animal to begin!",
// 	images: images,
// 	clickedImg: [],
// 	currentScore: 0,	
// 	topScore: 0
//   };


//   selectedImage = id => {
//     const clickedImg = this.state.clickedImg;
//     if (clickedImg.indexOf(id) === -1) {
//       clickedImg.push(id);
//       this.setState({
//         clickedImg: clickedImg,
//         currentScore: this.state.currentScore + 1
//       });
//       if (this.state.currentScore >= this.state.topScore) {
//         this.setState({ topScore: this.state.currentScore + 1});
//       }
//     }
//     else {
//       this.setState({
//         currentScore: 0,
//         clicked: [],
//         comments: "Shoot! You lost! Give it another shot, I know you can do it!"
//       }, this.reset());
//     }
//     this.gameOver();
//   }

  

//   reset() {
//     setTimeout(() => {4000});
//   }


//   render() {
//     return (
//       <Wrapper>
//         <Navigation
//         	currentScore={this.currentScore}
//         	topScore={this.topScore}
//          />
// 	      	<Title />
// 	        {this.state.images.map(image => (
// 	          <ImageCard
// 	            id={image.id}
// 	            key={image.id}
// 	            name={image.name}
// 	            image={image.image}
// 	            selectedImage={this.selectedImage}
// 	          />	          
// 	        ))}
//       </Wrapper>
//     );
//   }
// }

// export default App;