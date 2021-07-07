import React from "react";
import { useHistory } from "react-router-dom";
import "./route.css";

export const Route = ({ route }) => {
	const { url, description, visible } = route;
	const history = useHistory();
	const linkToOnClick = () => history.push(url);

	return (
		<div
			className={`route--main--container ${visible ? "visible--route" : ""}`}
			onClick={linkToOnClick}
		>
			{description}
		</div>
	);
};
