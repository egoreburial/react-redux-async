import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
	render() {
		const { user, page } = this.props
		const { getImages } = this.props.pageActions
		return <div className='row'>
			<User name={user.name} surname={user.surname} />
			<Page category={page.category} images={page.images} getImages={getImages} fetching={page.fetching} error={page.error}/>
		</div>
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		page: state.page
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
