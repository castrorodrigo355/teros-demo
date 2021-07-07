import { types } from "../types/types";

const initialState = {
	loading: false,
	msgError: null,
	/* ******************** */
	openSidebar: false,
	/* ******************** */
	loadingNotifications: false,
	errorNotifications: false,
	notifications: null,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_SIDEBAR:
			return {
				...state,
				openSidebar: !state.openSidebar,
			};
		/* ****************************************** */
		case types.BALANCE_OPEN_MODAL:
			return {
				...state,
				balanceOpenModal: !state.balanceOpenModal,
				selectedBalanceItem: action.payload,
			};
		/* ****************************************** */
		case types.REQUEST_NOTIFICATIONS_LOADING:
			return {
				...state,
				loadingNotifications: true,
			};
		case types.REQUEST_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				loadingNotifications: false,
				notifications: action.payload,
			};
		case types.REQUEST_NOTIFICATIONS_FAILURE:
			return {
				...state,
				loadingNotifications: false,
				errorNotifications: true,
			};
		/* ****************************************** */
		case types.uiSetError:
			return {
				...state,
				msgError: action.payload,
			};

		case types.uiRemoveError:
			return {
				...state,
				msgError: null,
			};

		case types.uiStartLoading:
			return {
				...state,
				loading: true,
			};

		case types.uiFinishLoading:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};
