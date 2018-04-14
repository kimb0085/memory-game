import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
	<div className="card">
	   	<div className="img-container">
	       	<img alt={props.name} src={props.image} onClick={() => props.selectedImage(props.id)} />
	    </div> 
	</div>
);
	
export default ImageCard;