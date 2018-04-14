import React from "react";
import "./ImageCard.css";

const ImageCard = (props) => {
	return(
	    <div className="card">
	    	<div className="img-container">
	        	<img alt={props.name} src={props.image} id={props.id} onClick={() => props.selectedImage(props.id)}/> 
	        </div> 
	    </div>
	   );
	}

export default ImageCard;