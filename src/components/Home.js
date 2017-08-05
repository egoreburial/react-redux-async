import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
	render() {
		const { login, isAuthenticated} = this.props.user
		return (
			<div className='row'>
				{isAuthenticated ?
				<div className='col-md-12'>Hi again, { login }! What's your business?</div>
				:
				<div className='col-md-12'>Welcome, Stranger! Enter as Admin or Sign In</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Home)
