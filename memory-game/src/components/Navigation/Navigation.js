import React from "react";
import "./Navigation.css";


const Navigation = props => (
	<nav className="navbar navbar-default navbar-fixed-top">
		<div className="container">
			<h1>Click on any image to begin</h1>
			<span></span>
			<p>Current Score: {props.currentScore}</p>
			<p>Top Score: {props.topScore}</p>
			<p>Message: {props.message}</p>
			<span></span>
		</div>
	</nav>
);

export default Navigation;