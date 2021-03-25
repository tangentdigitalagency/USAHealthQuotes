import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import LandingPage from './LandingPage';
import Assurance from './Component/Insurance';
// import "./index.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import ContextApiProvider from './context';
// this is coment
const App = () => {
	return (
		<>
			<ContextApiProvider>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/main' component={Main} />
					<Route exact path='/assurance' component={Assurance} />
					<Redirect to='/' />
				</Switch>
			</ContextApiProvider>
		</>
	);
};

export default App;
