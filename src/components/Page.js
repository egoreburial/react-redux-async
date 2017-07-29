import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
	onClickCategoryButton(event) {
		this.props.getImages(event.target.value)
	}

	componentDidMount() {
		this.props.getImages(this.props.category)
	}

	render() {
		const { category, images, error, fetching} = this.props

		const categoryHash = [
			{
				value: 'wallpapers',
				title: 'Wallpapeprs'
			}, {
				value: 'arts',
				title: 'Game Arts'
			}, {
				value: 'designs',
				title: 'Interor Designs'
			}, {
				value: 'error',
				title: 'Словим ошибку'
			}
		]
		return <div className='ib page'>
			<p>
				{
					categoryHash.map((category, index) =>
						<button key={index} className='btn' onClick={::this.onClickCategoryButton} value={category.value}>
							{category.title}
						</button>
					)
				}
			</p>
			<h3>Категория {category}</h3>
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
	}
}

Page.propTypes = {
	category: PropTypes.string.isRequired,
	images: PropTypes.array.isRequired,
	error: PropTypes.string.isRequired,
	getImages: PropTypes.func.isRequired
}
