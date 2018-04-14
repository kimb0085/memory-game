import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
	<div className="card">
	   	<div className="img-container">
	       	<img alt={props.name} src={props.image} onClick={() => props.selectImage(props.id)} />
	    </div> 
	</div>
);

// const ImageCard = props => (
//     <div className="card">
//         <div className="img-container">
//             <a onClick={() => props.selectImage(props.id)} 
//                 className={props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
//             >
//                 <img alt={props.name} src={props.image} />
//             </a>
//         </div>
//     </div>
// );
	
export default ImageCard;