import React from "react";
import "./ImageCard.css";


// const ImageCard = props => (
// 	<div className="card">
// 		<div className="img-container">
// 			<img alt={props.name} src={props.image} imageId={props.key} onClick={() => props.clickedImg(props.id)} />
// 		</div>
// 	</div>
// );

const ImageCard = (props) => {
	return(
	    <div className="card">
	    	<div className="img-container">
	        	<img alt={props.name} src={props.image} id={props.id} onClick={() => props.selectImage(props.id)}/> 
	        </div> 
	    </div>
	   );
	}

export default ImageCard;