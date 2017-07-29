import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class User extends Component {
	render() {
		const { name, surname} = this.props
		return <div className='user'>
				<p> Привет, { name } { surname } !</p>
			</div>
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired
}
