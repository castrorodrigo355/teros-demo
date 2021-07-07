import React from "react";
import "./imageOption.css";

export const ImageOption = ({ icon, onClick }) => {
	return (
		<div className="image--option--main--container" onClick={onClick}>
			<img src={icon} alt="..." />
		</div>
	);
};
