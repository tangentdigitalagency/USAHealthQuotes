import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Assurance from './Component/Assurance';
// import "./index.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import ContextApiProvider from './context';

const App = () => {
	return (
		<>
			<ContextApiProvider>
				<Switch>
					<Route exact path='/' component={Main} />
					<Route exact path='/assurance' component={Assurance} />
					<Redirect to='/' />
				</Switch>
			</ContextApiProvider>
		</>
	);
};

export default App;
