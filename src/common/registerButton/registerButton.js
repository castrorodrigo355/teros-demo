import React from "react";
import "./registerButton.css";

export const RegisterButton = ({ children, type, onClick }) => {
	return (
		<div className="registerButton--container">
			<button
				className="registerButton--container--button"
				type={type}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};
