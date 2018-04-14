import React from "react";
import "./ImageCard.css";

// const handleClickEvent = event => {
// 	// event.preventDefault();
// 	const idClicked = event.image.id;

// 	const newArray = this.state.idClicked;

// 	ImageCard();

// // 	this.setState({results: shuffle(this.state.results)});
// }

const ImageCard = props => (
	<div className="card" onClick={props.ImageCard}>
		<div className="img-container">
			<img alt={props.name} src={props.image} />
		</div>
		<div></div>
	</div>
);

export default ImageCard;