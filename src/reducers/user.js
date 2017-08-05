import {
	SIGNIN_REQUEST,
	SIGNIN_FAIL,
	SIGNIN_SUCCESS,
	SIGNOUT_SUCCES
} from '../constants/User'

const initialState = {
	login: '',
	pass: '',
	fetching: false,
	isAuthenticated: false,
	isAdmin: false
}

export default function userstate(state = initialState, action) {
	switch (action.type) {

		case SIGNIN_REQUEST:
			return {
				...state,
				fetching: true,
				error: false
			}

		case SIGNIN_SUCCESS:
			return {
				...state,
				login: action.payload.login,
				pass: action.payload.pass,
				isAdmin: action.payload.isAdmin,
				isAuthenticated: action.payload.isAuthenticated,
				fetching: false
			}

		case SIGNIN_FAIL:

			return {
				...state,
				error: action.payload.message,
				fetching: false
			}

		case SIGNOUT_SUCCES:
			return {
				...state,
				login: '',
				pass: '',
				isAdmin: '',
				isAuthenticated: false,
				fetching: false
			}

		default:
			return state
	}
}