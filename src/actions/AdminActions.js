import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USERS_ERROR
} from '../constants/Admin'
import axios from 'axios'

export function getUsers() {
	return (dispatch) => {
		dispatch({
			type: GET_USERS
		})

		setTimeout(() => {
			axios.get('/jsons/users.json')
				.then(res => {
					const users = res.data.users
					dispatch({
						type: GET_USERS_SUCCESS,
						payload: users
					})
				})
				.catch(err => {
					dispatch({
						type: GET_USERS_ERROR,
						error: true,
						payload: new Error(err)
					})
				})
		}, 1000)
	}
}
