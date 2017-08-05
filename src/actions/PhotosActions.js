import {
	GET_IMAGES_REQUEST,
	GET_IMAGES_SUCCESS,
	GET_IMAGES_ERROR
} from '../constants/Photos'
import axios from 'axios'

export function getImages(category) {
	return (dispatch) => {
		dispatch({
			type: GET_IMAGES_REQUEST,
			payload: category
		})

		setTimeout(() => {
			axios.get(`/jsons/${category}.json`)
				.then(res => {
					const images = res.data.images
					dispatch({
						type: GET_IMAGES_SUCCESS,
						payload: images
					})
				})
				.catch(err => {
					dispatch({
						type: GET_IMAGES_ERROR,
						error: true,
						payload: new Error(err)
					})
				})
		}, 1000)
	}
}
