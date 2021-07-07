import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RegisterScreen } from "../views/registerScreen/registerScreen";
import { LoginScreen } from "../views/loginScreen/loginScreen";
import "./authStyles.css";

export const AuthRouter = () => {
	return (
		<div className="auth--main--container">
			<Switch>
				<Route exact path="/auth/login" component={LoginScreen} />
				<Route exact path="/auth/register" component={RegisterScreen} />
				<Redirect to="/auth/login" />
			</Switch>
		</div>
	);
};
