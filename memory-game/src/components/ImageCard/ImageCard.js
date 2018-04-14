import React from "react";
import "./ImageCard.css";

const handleClickEvent = event => {
	// event.preventDefault();
	const idClicked = event.image.id;

	const newArray = this.state.idClicked;

	ImageCard();

// 	this.setState({results: shuffle(this.state.results)});
}

const ImageCard = props => (
	<div className="card">
		<div className="img-container">
			<button 
				onClick={props.onClick}
				className={props.currentScore === 0}
			/>
				<img alt={props.name} src={props.image} />
		</div>
	</div>
);

export default handleClickEvent;