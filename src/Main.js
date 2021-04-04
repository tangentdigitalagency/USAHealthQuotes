import React from 'react';
import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import healthLogo from './assets/img/healthLogo.png';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Icon from './assets/img/icon.png';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
	return (
		<div className='main-container'>
			<div className='white-bfr container'>
				<Navbar expand='lg' bg='' variant=''>
					<Navbar.Brand href='/'>
						<img src={healthLogo} width='181' alt='logo' />
					</Navbar.Brand>

					{/* <div className='right-navbar'>
						<p>
							<b>Help Need? </b>
						</p>
						<p> Call a Licensed Professional</p>
						<Link to=''>+18442606811</Link>
						<img
							className='sc-brqgnP ERCxP'
							alt='Dial'
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgBrVaLUcJAEH04FKAVeFYgVGAqUGxAMjYAHUAFkgoAK0AbkKEB0AYkVAAVqPu4vckZ87kMvpk35O52993ubS60UA8jvBN2lCvhEP+ESLgU7oWJsKeC5xU+VWt/DCfCrQo5GBWKSvwuhBvhNL9wlhsb2N23hF3hu3AEm80CtmyXJQJvwleNOUVFBtz9WMeRBh+jugwuA9pdaYxlmdDEExipcccTTDRYUiMQw1ZiLnzyBSI1IHr6bDSDhY4H+H3wZQIOFPr07I/p9TWIL7DN7dxHV4PcFwg4kS83MMiyYP/P9HmOrHyoENqX2HFtDS+w263LIkImXAeXUb45Yujhs91uYMvFQz4IUzUYIwyH3C/R0o2unAh3sIPNYKdGfBc+EIYH4UvB/K0TaWuwFFknwZurA7uKlXjMzfdVOMWJYElY5mHBPM/IBMQ4ZjaoWGcXTgrm6TNFoABfNLbnKLdmYDMoen9YvjUCsnACY9iO+1ahCNl10yvw4w3AMvXRQMAge+M3uvsBii9L36+xQK1TEwGo4aShQKeB7RGxOoQ4cffuY9ZDQ8TqaAKCzxD4TW/nxnP95SHzCud9xJJcw3YXn59hL8UUJyKGbV2WjldNoiLB/0Z8/AA9Qnx/iv07ywAAAABJRU5ErkJggg=='
							style={{ width: '24px', height: '24px' }}
						/>
					</div> */}
				</Navbar>
			</div>
			<div className='container'>
				<Container>
					<Row>
						<Col lg={6} xs={12}>
							
								<img src={Icon} className='sideForm' />
						
						</Col>

						<Col lg={6} xs={12}>
							<div className='health'>What type of Health Insurance plan are you looking for?</div>
							<div className='aca-pla'>
								<Link to='./Step1'>
									<Button size='md' variant='secondary' className='light-shadow'>
										ACA PLAN
									</Button>
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<Row className='foot-ser'>
					<Col xd={2} md={{ span: 2 }}>
						<Link to=''>Terms of Service</Link>
					</Col>
					<Col xd={2} md={{ span: 2 }}>
						<Link to=''>Privacy Policy</Link>
					</Col>
					<Col xd={2} md={{ span: 3 }}>
						<Link to=''>Do Not Sell My Personal Information</Link>
					</Col>
				</Row>
				<Row className='fooot-r'>
					<Col xd={2} md={{ offset: 5 }}>
						© Copyright USA Health Quotes 2021
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Main;
