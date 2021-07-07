import { types } from "../types/types";

export const setError = (err) => ({
	type: types.uiSetError,
	payload: err,
});

export const removeError = () => ({
	type: types.uiRemoveError,
});

export const startLoading = () => ({
	type: types.uiStartLoading,
});

export const finishLoading = () => ({
	type: types.uiFinishLoading,
});

export const toggleSidebar = () => ({
	type: types.TOGGLE_SIDEBAR,
});

export const getNotifications = () => {
	return async (dispatch) => {
		dispatch({ type: types.REQUEST_NOTIFICATIONS_LOADING });
		try {
			const url = `https://jsonplaceholder.typicode.com/users`;
			const res = await fetch(url, {});
			if (res.status === 200) {
				const response = await res.json();
				dispatch({
					type: types.REQUEST_NOTIFICATIONS_SUCCESS,
					payload: response,
				});
			} else {
				dispatch({ type: types.REQUEST_NOTIFICATIONS_FAILURE });
			}
		} catch (error) {
			dispatch({ type: types.REQUEST_NOTIFICATIONS_FAILURE });
		}
	};
};
