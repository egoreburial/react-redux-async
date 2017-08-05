import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../actions/UserActions'

export class Signin extends Component {
	constructor() {
		super()
		this.state = {
			login: '',
			pass: '',
			error: false,
			fetching: false
		}
	}

	handleChange (event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	allowSubmit() {
		const { login, pass , fetching } = this.state
		return login.length > 0 && pass.length > 0 && !fetching
	}

	handleSubmit(event) {
		event.preventDefault()
		this.setState({ fetching: true })
		this.props.actions.signin({
			login: event.target.elements.login.value,
			pass: event.target.elements.pass.value
		})
	}
	render() {
		const isDisabled = this.allowSubmit()
		const { login, error, fetching, isAuthenticated} = this.props.user
		return (
			<div className='row'>
			{
				isAuthenticated ?
				<div className='col-md-12'>Logged in as { login }</div>
				:
				<div>
					{
						fetching ?
						<div className='alert alert-info'>
							<strong>Checking...</strong> One moment please...
						</div>
						:
						null
					}
					{
						error ?
						<div className='alert alert-danger'>
							<strong>Error!</strong> {error.message}
						</div>
						:
						null
					}
					<div className='col-md-12'>Enter login/pass:</div>
						<form className='col-md-4' onSubmit={::this.handleSubmit}>
							<div className='form-group'>
								<label htmlFor='login'>Login:</label>
								<input type='text' className='form-control' name='login' placeholder='Login...'onChange={::this.handleChange}/>
							</div>
							<div className='form-group'>
								<label htmlFor='pass'>Password:</label>
								<input type='text' className='form-control' name='pass' placeholder='Password...'onChange={::this.handleChange}/>
							</div>
							<button className='btn btn-primary' type='submit' disabled={!isDisabled}>Sign in</button>
					</form>
				</div>
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

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(UserActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
