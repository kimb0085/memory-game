import React from "react";
import "./Navigation.css";

// class Navbar extends Component {
// 	render() {
// 		return (
// 			<nav className="navbar navbar-default navbar-fixed-top">
// 				<ul>
// 					<li className="itemLeft">Click any image to begin</li>
// 					<li className="itemCenter"></li>
// 					<li className="itemRight">Current Score: {this.props.currentScore}</li>
// 					<li className="itemRight"></li>
// 				</ul>
// 			</nav>
// 		);
// 	}
// }

const Navigation = props => (
	<nav className="navbar navbar-default navbar-fixed-top">
		<div className="container">
			<h1>Click on any image to begin</h1>
			<span></span>
			<p>Score: {props.currentScore}</p>
		</div>
		<div></div>
	</nav>
);

export default Navigation;