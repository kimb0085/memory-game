import React from "react";
import "./Navigation.css";

const Navigation = props => (
	<div>
		<ul className="nav nav-pills nav-justified">
			<li><a href="/">Baby Animals Clicky Game</a></li>
			<li
				className={props.message.indexOf("incorrectly") !== -1 ?
					"desc-incorrect":
					props.message.indexOf("correctly") != -1 ?
						"desc-correct":
						"desc-normal"}
			/>
				{props.message}
			</li>
			<li>Current Score: <span style={{color: "green"}}>{props.currentScore}</span> | Top Score: {props.topScore}</li>
		</ul>
	</div>
);

export default Navigation;