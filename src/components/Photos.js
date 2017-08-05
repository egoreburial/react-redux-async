import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as photosActions from '../actions/PhotosActions'

export class Photos extends Component {
	componentWillMount() {
		this.props.actions.getImages(this.props.params.category)
	}

	render() {
		const { category } = this.props.params
		const { images, error, fetching} = this.props.photos
		return (
			<div className='row'>
				<h3 className='col-md-12'>{ category }</h3>
				<div className='col-md-12'>
					{ error ? <p> Алярм! Алярм! { error }</p> : '' }
					{
						fetching ?
						<p>Загрузка</p>
						:
						<div>
							{ images.length ? <p>Получено {images.length} изображений</p> : '' }
							{ images.map((image, index) =>
								<div key={index} className='image'>
									<img src={image.url} />
								</div>
							)}
						</div>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		photos: state.photos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(photosActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
