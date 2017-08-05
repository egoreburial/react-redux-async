import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USERS_ERROR
} from '../constants/Admin'

const initialState = {
	users: [],
	error: '',
	fetching: false
}

export default function users(state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return {...state, fetching: true, error: ''}

		case GET_USERS_SUCCESS:
			return {...state, users: action.payload, fetching: false, error: ''}

		case GET_USERS_ERROR:
			return {...state, error: action.payload.message, fetching: false, users: []}

		default:
			return state
	}
}
