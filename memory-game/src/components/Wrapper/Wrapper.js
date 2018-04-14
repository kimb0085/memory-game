import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
	<div className="wrapper">{props.children}
		<div></div>
	</div>
);

export default Wrapper;