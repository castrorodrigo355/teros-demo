import { types } from "../types/types";

export const emailPasswordRegister = (email, password) => {
	return async (dispatch) => {
		dispatch({ type: types.REQUEST_SESSION_LOADING });
		try {
			const url = "/register";
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({ email, password }),
				headers: { "Content-Type": "application/json" },
			});
			console.log("RES: ", res);
			if (res.status === 201) {
				const response = await res.json();
				dispatch({ type: types.REQUEST_SESSION_SUCCESS });
				localStorage.setItem("token", response.token);
			} else {
				dispatch({ type: types.REQUEST_SESSION_FAILURE });
			}
		} catch (error) {
			dispatch({ type: types.REQUEST_SESSION_FAILURE });
		}
	};
};

export const emailAndPasswordLogin = (user, password) => {
	return async (dispatch) => {
		dispatch({ type: types.REQUEST_SESSION_LOADING });
		// try {
		// 	const url = "/login";
		// 	const res = await fetch(url, {
		// 		method: "POST",
		// 		body: JSON.stringify({ email, password }),
		// 		headers: { "Content-Type": "application/json" },
		// 	});
		// 	if (res.status === 200) {
		// 		const response = await res.json();
		// 		console.log(response);
		// 		dispatch({ type: types.REQUEST_SESSION_SUCCESS });
		// 		localStorage.setItem("token", response.token);
		// 	} else {
		// 		dispatch({ type: types.REQUEST_SESSION_FAILURE });
		// 	}
		// } catch (error) {
		// 	dispatch({ type: types.REQUEST_SESSION_FAILURE });
		// }
		localStorage.setItem("token", "this_is_my_token");
		dispatch({ type: types.REQUEST_SESSION_SUCCESS });
	};
};

export const refreshUserSession = () => {
	return async (dispatch) => {
		const token = localStorage.getItem("token");
		if (token) {
			dispatch({ type: types.REQUEST_SESSION_SUCCESS });
		} else {
			dispatch({ type: types.REQUEST_SESSION_FAILURE });
		}
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		localStorage.clear();
		dispatch(logout());
	};
};

export const logout = () => ({
	type: types.logout,
});
