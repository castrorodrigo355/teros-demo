import React, { useEffect } from "react";
import { AppRouter } from "./routers/appRouter";
import { AuthRouter } from "./routers/authRouter";
import { PublicRoute } from "./routers/publicRoute";
import { PrivateRoute } from "./routers//privateRoute";
import { refreshUserSession } from "./actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
	const dispatch = useDispatch();
	const { loadingUserSession, successUserSession } = useSelector(
		(state) => state.auth,
	);

	const setAvailableArea = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setAvailableArea();
		window.addEventListener("resize", setAvailableArea);
		return () => window.removeEventListener("resize", setAvailableArea);
	});

	useEffect(() => {
		dispatch(refreshUserSession());
	}, [dispatch]);

	if (loadingUserSession) {
		return <h1>Loading...</h1>;
	}

	return (
		<Router>
			<div className="app--main--container">
				<Switch>
					<PublicRoute
						isAuthenticated={successUserSession}
						path="/auth"
						component={AuthRouter}
					/>

					<PrivateRoute
						isAuthenticated={successUserSession}
						path="/"
						component={AppRouter}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
