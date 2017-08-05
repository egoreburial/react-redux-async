import React from 'react'
import { Route, IndexRoute} from 'react-router'

import App from './containers/App'

import Admin from './components/Admin'
import Home from './components/Home'
import Photos from './components/Photos'
import NotFound from './components/NotFound'
import List from './components/List'
import Signin from './components/Signin'
import Signout from './components/Signout'
import requireAuthentication from './containers/AuthenticatedComponent'

export const routes = (
	<div>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='admin' component={requireAuthentication(Admin)}/>
			<Route path='list' component={requireAuthentication(List)} />
			<Route path='photos/:category' component={requireAuthentication(Photos)} />
			<Route path='signin' component={Signin} />
			<Route path='signout' component={Signout} />
		</Route>
		<Route path='*' component={NotFound} />
	</div>
)
