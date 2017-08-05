import {
	SIGNIN_REQUEST,
	SIGNIN_FAIL,
	SIGNIN_SUCCESS,
	SIGNOUT_SUCCES
} from '../constants/User'
import { ROUTING } from '../constants/Routing'
import axios from 'axios'

export function signin(payload) {
	return (dispatch) => {

		dispatch({
			type: SIGNIN_REQUEST
		})

		setTimeout(() => {
			axios.get('./jsons/users.json')
				.then(res => {
					const users = res.data.users
					let authUser = users.find((user) => {
						return user.login === payload.login
					})

					if (!authUser) {
						throw new Error('User not found')
					} else if (authUser.pass !== payload.pass) {
						throw new Error('Incorrect Password')
					} else {
						authUser.isAuthenticated = true
					}

					return authUser
				})
				.then((authUser) => {
					dispatch({
						type: SIGNIN_SUCCESS,
						payload: authUser
					})

					dispatch({
						type: ROUTING,
						payload: {
							method: 'replace',
							nextUrl: authUser.isAdmin ? '/admin' : '/list'
						}
					})
				}).catch(err => {
					dispatch({
						type: SIGNIN_FAIL,
						error: true,
						payload: {
							login: payload.login,
							pass: payload.pass,
							message: err
						}
					})
				})
		},2000)
	}
}

export function signout() {
	return (dispatch) => {
		dispatch({
			type: SIGNOUT_SUCCES
		})
	}
}
