import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink'

class App extends Component {
	render() {
		const { isAuthenticated } = this.props.user
		return (
			<div className='app'>
				<div className='container'>
					<ul className='nav nav-pills'>
						<li><NavLink to='/' onlyActiveOnIndex={true}>Main Page</NavLink></li>
						<li><NavLink to='/admin'>Admin Panel</NavLink></li>
						<li><NavLink to='/list'>Categories</NavLink></li>
						{
							isAuthenticated ?
							<li><NavLink to='/signout'>Sign out</NavLink></li>
							:
							<li><NavLink to='/signin'>Sign in</NavLink></li>
						}
					</ul>
					{this.props.children}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		photos: state.photos
	}
}

export default connect(mapStateToProps)(App)
