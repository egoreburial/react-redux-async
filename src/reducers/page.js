import {
	GET_IMAGES_REQUEST,
	GET_IMAGES_SUCCESS,
	GET_IMAGES_ERROR
} from '../constants/Page'

const initialState = {
	category: 'wallpapers',
	images: [],
	error: '',
	fetching: false
}

export default function page(state = initialState, action) {
	switch (action.type) {
		case GET_IMAGES_REQUEST:
			return {...state, category: action.payload, fetching: true, error: ''}

		case GET_IMAGES_SUCCESS:
			return {...state, images: action.payload, fetching: false, error: ''}

		case GET_IMAGES_ERROR:
			return {...state, error: action.payload.message, fetching: false, images: []}

		default:
			return state
	}
}
