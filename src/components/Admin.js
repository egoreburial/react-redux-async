import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as adminActions from '../actions/AdminActions'

export class Admin extends Component {
	componentWillMount() {
		this.props.actions.getUsers()
	}
	render() {
		const { users, fetching, error } = this.props.admin
		console.log(this.props)
		return (
			<div className='row'>
				<div className='col-md-12'>Welcome!</div>
				{
					fetching ?
					<p> Getting users list... </p>
					:
					<div className='col-md-12'>
						{
							error ?
							<p> {error.message} </p>
							:
							<div>
								<p> There is { users.length } registered users! </p>
								<table className='table table-bordered'>
									<thead>
										<tr>
											<td>Login</td>
											<td>Pass</td>
											<td>isAdmin</td>
										</tr>
									</thead>
									<tbody>
										{
											users.map((user, index) =>
												<tr key={index}>
													<td>{user.login}</td>
													<td>{user.pass}</td>
													<td>{user.isAdmin.toString()}</td>
												</tr>
											)
										}
									</tbody>
								</table>
							</div>
						}
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		admin: state.admin
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(adminActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
