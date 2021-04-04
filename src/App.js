import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import LandingPage from './LandingPage';
import Assurance, { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12, Step13, Step14 } from './Component/Insurance';
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
					<Route exact path='/Step1' component={Step1} />
					<Route exact path='/Step2' component={Step2} />
					<Route exact path='/Step3' component={Step3} />
					<Route exact path='/Step4' component={Step4} />
					<Route exact path='/Step5' component={Step5} />
					<Route exact path='/Step6' component={Step6} />
					<Route exact path='/Step7' component={Step7} />
					<Route exact path='/Step8' component={Step8} />
					<Route exact path='/Step9' component={Step9} />
					<Route exact path='/Step10' component={Step10} />
					<Route exact path='/Step11' component={Step11} />
					<Route exact path='/Step12' component={Step12} />
					<Route exact path='/Step13' component={Step13} />
					<Route exact path='/Step14' component={Step14} />
					<Redirect to='/' />
				</Switch>
			</ContextApiProvider>
		</>
	);
};

export default App;
