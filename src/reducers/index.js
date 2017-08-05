import { combineReducers } from 'redux'
import photos from './photos'
import user from './user'
import admin from './admin'

export const  rootReducer = combineReducers({
	photos,
	user,
	admin
})