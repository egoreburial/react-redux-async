import React, { Component } from 'react'
import { Link } from 'react-router'

export default class List extends Component {
	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-md-12'>
						<h3> Category List </h3>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<ul className='list'>
							<li className='list__item'>
								<Link to='/photos/wallpaper/'>Wallpaper</Link>
							</li>
							<li className='list__item'>
								<Link to='/photos/games/'>Games Arts</Link>
							</li>
							<li className='list__item'>
								<Link to='/photos/designs/'>Interor Designs</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}