import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';
import Join from '../containers/Join';
import Member from '../containers/Member';
import Page404 from '../containers/common/Page/404';

const routes = [
	{
		path: '',
		exact: true,
		component: Main,
	},
	{
		path: 'join',
		exact: true,
		component: Join,
	},
	{
		path: 'memberlist',
		exact: true,
		component: Member,
	},
	{
		path: '*',
		component: Page404,
	},
];

class AppRouter extends Component {

	render() {
		const {
			url,
		} = this.props;

		return (
			<Switch>
				{routes.map((singleRoute) => {
					const { path, exact, ...otherProps } = singleRoute;
					return <Route
						exact={exact}
						key={path}
						path={`${url}${path}`}
						{...otherProps} />;
				})}
			</Switch>
		);
	}
}

export default AppRouter;
