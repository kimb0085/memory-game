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
		currentScore: 0		 
		// unselected: images
	};

	imageClick = event => {
		const unselected = event.target.alt;
		const selectedImg = this.state.clickedImg.indexOf(unselected) > - 1;

		if(selectedImg){
			this.setState({
				image: this.state.image.sort(function(a, b){
					return 0.5 - Math.random();
				}),
				clickedImg: [],
				currentScore: 0
			});
			alert("tough luck, give it another shot");
		} else {
			this.setState(
				{
					image: this.state.image.sort(function(a, b){
						return 0.5 - Math.random();
					}),
					clickedImg: this.state.clickedImg.concat(
						unselected
					),
					currentScore: this.state.currentScore + 1
				},

				() => {
					if (this.state.currentScore === 12) {
						alert("congrats! you won!");
						this.setState({
							image: this.state.food.sort(function(a, b){
								return 0.5 - Math.random();
							}),
							clickedImg: [],
							currentScore: 0
						});
					}
				}
			);
		}
	}

	// render(){
	// 	return (
	// 		<div>
	// 			<Navigation
	// 				currentScore={this.state.currentScore}
	// 			/>
	// 			<Title />
	// 			<div className="wrapper">
	// 				{this.state.image.map(image => (
	// 					<ImageCard
	// 						imageClick={this.imageClick}
	// 						key={image.id}
	// 						id={image.id}
	// 						name={image.name}
	// 						image={image.image}
	// 					/>
	// 				))}
	// 			</div>
	// 		</div>
	// 	);
	// }

	// mounted(){
 
	// };

	// shuffle = array => {
	// 	for (let i = array.length - 1; i > 0; i--){
	// 		let j = Math.floor(Math.random() * (i + 1));
	// 		[array[i], array[j]] = [array[j], array[i]];
	// 	}
	// }

	// selectImage = name => {
	// 	const findImg = this.state.unselected.find(item => item.name === name);

	// 	if(findImg === undefined) {
	// 		//oops, you did select a new, unique image
	// 		this.setState({
	// 			message: "You already guessed that one",
	// 			topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore: this.state.topScore,
	// 			currentScore: 0,
	// 			images: images,
	// 			unselected: images
	// 		});
	// 	} else {
	// 		//correctly selected a new image
	// 		const newImages = this.state.unselected.filter(item => item.name != name);

	// 		this.setState({
	// 			message: "You are so right!",
	// 			currentScore: this.state.currentScore + 1,
	// 			images: images,
	// 			unselected: images
	// 		});
	// 	}
	// 	this.shuffle(images);
	// }

	//render an image card 
	render() {
		return (
			<Wrapper>
				<Navigation	/>
				<Title />
				{this.state.images.map(image => (
					<ImageCard				
						imageClick={this.imageClick}
						key={image.id}
						id={image.id}
						name={image.name}
						image={image.image}
					/>
				))}
			</Wrapper>
			);
		}
}

export default App;