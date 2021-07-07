import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { registerForm } from "../../constants/auth";
import { useSelector } from "react-redux";
import alchemyIcon from "../../icons/alchemy--icon.png";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
// import validator from "validator";
// import { emailPasswordRegister } from "../../actions/auth";
// import { setError, removeError } from "../../actions/ui";
// import { InputText } from "../../common/inputText/inputText";
// import { RegisterButton } from "../../common/registerButton/registerButton";
// import { Dropdown } from "primereact/dropdown";
// import { emailAndPasswordLogin } from "../../actions/auth";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./registerScreen.css";

export const RegisterScreen = () => {
	const history = useHistory();
	// const dispatch = useDispatch();
	const {
		// msgError
	} = useSelector((state) => state.ui);

	const [formValues, handleInputChange] = useForm(registerForm);
	// const { email, password, password2 } = formValues;

	// const handleRegister = (e) => {
	// 	e.preventDefault();
	// 	dispatch(emailPasswordRegister(email, password));
	// 	// if (isFormValid()) {
	// 	// 	dispatch(emailPasswordRegister(email, password));
	// 	// }
	// };

	// const isFormValid = () => {
	// 	if (email.trim().length === 0 || password.trim().length === 0) {
	// 		dispatch(setError("Email and password is required"));
	// 		return false;
	// 	} else if (!validator.isEmail(email)) {
	// 		dispatch(setError("Email is not valid"));
	// 		return false;
	// 	} else if (password !== password2 || password.length < 5) {
	// 		dispatch(
	// 			setError(
	// 				"Password should be at least 6 characters and match each other",
	// 			),
	// 		);
	// 		return false;
	// 	}
	// 	dispatch(removeError());
	// 	return true;
	// };

	const onClickFunction1 = () => {
		console.log("RECOVER PASSWORD !!!");
		history.push("/auth/login");
	};

	const header = <img alt="Card" src={alchemyIcon} />;

	return (
		<div className="register--screen--main--container">
			<Card header={header} style={{ width: "400px" }}>
				<div className="p-fluid p-formgrid p-grid">
					<div
						className="p-field p-col-12 p-md-6"
						style={{ margin: "5px 10px" }}
					>
						<InputText
							type="text"
							placeholder="Email"
							type="email"
							name="email"
							value={formValues.email}
							onChange={handleInputChange}
						/>
					</div>
					<div
						className="p-field p-col-12 p-md-3"
						style={{ margin: "20px 10px 5px 10px" }}
					>
						<Button
							label="Recuperar"
							className="p-button-raised p-button-secondary"
							style={{ marginRight: ".25em" }}
							onClick={onClickFunction1}
						/>
					</div>
					<div
						className="p-field p-col-12 p-md-3"
						style={{ margin: "20px 10px 5px 10px" }}
					>
						<div className="register--screen--main--container--inputs--link">
							<Link to="/auth/login" className="link">
								Back to Login
							</Link>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};
