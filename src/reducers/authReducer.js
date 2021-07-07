import { types } from "../types/types";

export const authReducer = (
	state = {
		loadingUserSession: true,
		successUserSession: false,
		failureUserSession: false,
	},
	action,
) => {
	switch (action.type) {
		case types.REQUEST_SESSION_LOADING:
			return {
				...state,
				loadingUserSession: true,
			};
		/* **************************************** */
		case types.REQUEST_SESSION_SUCCESS:
			return {
				...state,
				loadingUserSession: false,
				successUserSession: true,
			};
		/* **************************************** */
		case types.REQUEST_SESSION_FAILURE:
			return {
				...state,
				loadingUserSession: false,
				failureUserSession: true,
			};
		/* **************************************** */
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			};

		case types.logout:
			return {
				init_session_request_success: false,
			};

		default:
			return state;
	}
};
