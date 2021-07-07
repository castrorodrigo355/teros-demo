import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import alchemyIcon from "../../icons/alchemy--icon.png";
import { dropdownData, loginForm } from "../../constants/auth";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { emailAndPasswordLogin } from "../../actions/auth";
// import { InputText } from "../../common/inputText/inputText";
// import { RegisterButton } from "../../common/registerButton/registerButton";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./loginScreen.css";

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState(null);
	const [formValues, handleInputChange] = useForm(loginForm);

	const onClickFunction1 = () => {
		const { user, password, company } = formValues;
		if (data) {
			dispatch(emailAndPasswordLogin(user, password));
		} else {
			if (user === "" || password === "" || company === "") {
				console.log("VALIDAR 1");
			} else {
				setData(dropdownData);
			}
		}
	};

	const header = <img alt="Card" src={alchemyIcon} />;

	return (
		<div className="login--screen--main--container">
			<Card header={header} style={{ width: "400px" }}>
				<div className="p-fluid p-formgrid p-grid">
					<div
						className="p-field p-col-12 p-md-6"
						style={{ margin: "5px 10px" }}
					>
						<InputText
							type="text"
							placeholder="Usuario"
							type="user"
							name="user"
							value={formValues.user}
							onChange={handleInputChange}
						/>
					</div>
					<div className="p-field p-col-12 p-md-6" style={{ margin: "10px" }}>
						<InputText
							type="text"
							placeholder="Clave"
							autoComplete="off"
							type="password"
							name="password"
							value={formValues.password}
							onChange={handleInputChange}
						/>
					</div>
					<div className="p-field p-col-12 p-md-6" style={{ margin: "10px" }}>
						<InputText
							type="text"
							placeholder="Empresa"
							type="text"
							name="company"
							value={formValues.company}
							onChange={handleInputChange}
						/>
					</div>
					<div className="login--screen--main--container--inputs--link">
						<Link to="/auth/register" className="link">
							Olvidó su contraseña ?
						</Link>
					</div>
					{data && (
						<div className="p-field p-col-12 p-md-3" style={{ margin: "10px" }}>
							<label htmlFor="state">Seleccione Conexión</label>
							<Dropdown
								inputId="state"
								value={"selectedState"}
								options={data}
								onChange={(e) => {}}
								placeholder="Select"
								optionLabel="name"
								style={{ margin: "5px 0" }}
							/>
						</div>
					)}
					<div
						className="p-field p-col-12 p-md-3"
						style={{ margin: "20px 10px 5px 10px" }}
					>
						<Button
							label="Ingresar"
							className="p-button-raised p-button-secondary"
							style={{ marginRight: ".25em" }}
							onClick={onClickFunction1}
						/>
					</div>
				</div>
			</Card>
		</div>
	);
};
