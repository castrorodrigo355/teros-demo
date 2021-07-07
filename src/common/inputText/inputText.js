import React from "react";
import "./inputText.css";

export const InputText = ({
	placeholder,
	autoComplete,
	type,
	name,
	value,
	onChange,
}) => {
	return (
		<div className="inputText--container">
			<input
				placeholder={placeholder}
				autoComplete={autoComplete}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
