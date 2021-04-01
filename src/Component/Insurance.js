import React, { Component, useContext } from 'react';
import { Nav, Navbar, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import DoneIcon from '@material-ui/icons/Done';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import healthLogo from '../assets/img/healthLogo.png';
import Icon from '../assets/img/icon.png';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import { ContextApi } from '../context';
import './Home.css';
import '../Main.css';

function Step1() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 1) {
		return null;
	}

	return (
		<div className='form-group'>
			<label htmlFor='email'>What is your Zip Code ?</label>
			<div className='frm-step'>
				<TextField type='number' className='textField responsiveField' id='outlined-basic' name='zip' onChange={context.zipChange} label='Zip' variant='outlined' />
			</div>
			<div className='steo-frm'>
				<Button onClick={context._next} disabled={context.zip.length < 5} size='md' variant='secondary' className='light-shadow'>
					CONTINUE
				</Button>
			</div>
		</div>
	);
}

function Step2() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 2) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>When Would You like coverage?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('IMMEDIATELY')} size='md' variant='secondary' className='light-shadow'>
					IMMEDIATELY
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('2 MONTHS')} size='md' variant='secondary' className='light-shadow'>
					2 MONTHS
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('NOT SURE')} size='md' variant='secondary' className='light-shadow'>
					NOT SURE
				</Button>
			</div>
		</div>
	);
}

function Step3() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 3) {
		return null;
	}

	return (
		<React.Fragment>
			<div className='form-group'>
				<label>What is total your household income?</label>
				<div className='steo-frm'>
					<Button onClick={() => context._next(3)} size='md' variant='secondary' className='light-shadow'>
						$47,000+
					</Button>
				</div>
				<div className='steo-frm'>
					<Button onClick={() => context._next(2)} size='md' variant='secondary' className='light-shadow'>
						$30,000 - $47,000
					</Button>
				</div>
				<div className='steo-frm'>
					<Button onClick={() => context._next(1)} size='md' variant='secondary' className='light-shadow'>
						$16,000 - $30,000
					</Button>
				</div>
				<div className='steo-frm'>
					<Button onClick={() => context._next(0)} size='md' variant='secondary' className='light-shadow'>
						$0 - $16,000
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
}
function Step4() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 4) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>What is your gender?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('MALE')} size='md' variant='secondary' className='light-shadow'>
					MALE
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('FEMALE')} size='md' variant='secondary' className='light-shadow'>
					FEMALE
				</Button>
			</div>
		</div>
	);
}
function Step5() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 5) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>What is your date of birth?</label>
			<div className='frm-step'>
				<Row>
					<Col xd={2} md={{ span: 4 }}>
						<FormControl style={{ width: '100%' }} variant='outlined'>
							<InputLabel id='demo-simple-select-outlined-label'>Month</InputLabel>
							<Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' name='month' value={context.month} onChange={context.handleChangeDate1} label='Month'>
								{['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, id) => (
									<MenuItem key={id} value={month}>
										{month}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Col>
					<Col xd={2} md={{ span: 4 }}>
						<TextField type='text' id='outlined-basic' className='responsiveField' label='Day' name='date' value={context.date} onChange={context.handleChangeDate1} variant='outlined' />
					</Col>
					<Col xd={2} md={{ span: 4 }}>
						<TextField type='text' id='outlined-basic' className='responsiveField' label='Year' name='year' value={context.year} onChange={context.handleChangeDate1} variant='outlined' />
					</Col>
				</Row>
				<div className='steo-frm'>
					<Button onClick={context._next} disabled={context.month === '' || context.date === '' || context.year === ''} size='md' variant='secondary' className='light-shadow'>
						CONTINUE
					</Button>
				</div>
			</div>
		</div>
	);
}
function Step6() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 6) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>Have you used tobacco products within the last 12 months?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('YES')} size='md' variant='secondary' className='light-shadow'>
					YES
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('NO')} size='md' variant='secondary' className='light-shadow'>
					NO
				</Button>
			</div>
		</div>
	);
}
function Step7() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 7) {
		return null;
	}
	return (
		<div className='form-group'>
			<div className='ste-frm'>
				{context.tobaco === 'YES' && (
					<Button size='md' variant='secondary' className='light-shadow'>
						<DoneIcon style={{ color: 'green' }} /> Affordable plans for Tobacco Users
					</Button>
				)}
			</div>
			<label>Are you looking to include your spouse in your Health Insurance plan?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('YES')} size='md' variant='secondary' className='light-shadow'>
					YES
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('NO')} size='md' variant='secondary' className='light-shadow'>
					NO
				</Button>
			</div>
		</div>
	);
}
function Step8() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 8) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>What is your spouse's gender?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('MALE')} size='md' variant='secondary' className='light-shadow'>
					MALE
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('FEMALE')} size='md' variant='secondary' className='light-shadow'>
					FEMALE
				</Button>
			</div>
		</div>
	);
}
function Step9() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 9) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>What is your spouse's date of birth?</label>
			<Row>
				<Col xd={2} md={{ span: 4 }}>
					<FormControl style={{ width: '100%' }} variant='outlined'>
						<InputLabel id='demo-simple-select-outlined-label'>Month</InputLabel>
						<Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' name='month2' value={context.month2} onChange={context.handleChangeDate2} label='Month'>
							{['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, id) => (
								<MenuItem key={id} value={month}>
									{month}
								</MenuItem>
							))}
						</Select>
					</FormControl>{' '}
				</Col>
				<Col xd={2} md={{ span: 4 }}>
					<TextField type='text' id='outlined-basic' className='responsiveField' label='Date' name='date2' value={context.date2} onChange={context.handleChangeDate2} variant='outlined' />
				</Col>
				<Col xd={2} md={{ span: 4 }}>
					<TextField type='text' id='outlined-basic' className='responsiveField' label='Year' name='year2' value={context.year2} onChange={context.handleChangeDate2} variant='outlined' />
				</Col>
			</Row>
			<div className='steo-frm'>
				<Button onClick={context._next} size='md' disabled={context.month2 === '' || context.date2 === '' || context.year2 === ''} variant='secondary' className='light-shadow'>
					CONTINUE
				</Button>
			</div>
		</div>
	);
}
function Step10() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 10) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>Has your spouse used tobacco products within the last 12 months?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('YES')} size='md' variant='secondary' className='light-shadow'>
					YES
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('No')} size='md' variant='secondary' className='light-shadow'>
					NO
				</Button>
			</div>
		</div>
	);
}
function Step11() {
	const context = useContext(ContextApi);
	if (context.currentStep !== 11) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>Are you looking to include your Children in your Health Insurance plan?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('YES')} size='md' variant='secondary' className='light-shadow'>
					YES
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('YES')} size='md' variant='secondary' className='light-shadow'>
					NO
				</Button>
			</div>
		</div>
	);
}
function Step12() {
	const context = useContext(ContextApi);

	if (context.currentStep !== 12) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>Do any applications weigh over 325 lbs if male, or over 275 lbs if female?</label>
			<div className='steo-frm'>
				<Button onClick={() => context._next('YES')} size='md' variant='secondary' className='light-shadow'>
					YES
				</Button>
			</div>
			<div className='steo-frm'>
				<Button onClick={() => context._next('NO')} size='md' variant='secondary' className='light-shadow'>
					NO
				</Button>
			</div>
		</div>
	);
}

function Step13() {
	const context = useContext(ContextApi);

	if (context.currentStep !== 13) {
		return null;
	}
	return (
		<div className='form-group'>
			<label>Last step! Your quote is ready.</label>
			<Row>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='first_name' onChange={context.changeLastStepForm} label='First Name' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='last_name' onChange={context.changeLastStepForm} label='Last Name' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' required className='fullWidth responsiveField' id='outlined-basic' name='phone_cell' onChange={context.changeLastStepForm} label='Phone' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' required className='fullWidth responsiveField' id='outlined-basic' name='email_address' onChange={context.changeLastStepForm} label='Email' variant='outlined' />
					</div>
				</Col>
				<Col lg={12} xs={12}>
					<Checkbox checked={context.agree} style={{ lineHeight: '1rem' }} onChange={context.onChangeAgree}>
						By clicking the View My Quote Button, I agree to the contents below the button.
					</Checkbox>
				</Col>
				<Col lg={12} xs={12}>
					<div className='steo-frm'>
						<Button disabled={context.email_address === '' || context.phone_cell === '' || !context.agree} onClick={context._next} size='md' variant='secondary' className='light-shadow'>
							VIEW MY QUOTE
						</Button>
					</div>
				</Col>
				<Col lg={12} xs={12}>
					<div className='terms-and-condition'>
						<div>
						By hitting submit above , I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, ourmarketing and re-marketing network, and up to eight insurance companies or their affiliates  or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site; and I acknowledge that I may revoke my consent at any time by Calling1 888-316-1350 or emailing “STOP” to optout@quotehound.com.I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE
						</div>
					</div>
				</Col>
			</Row>

			<Modal show={context.show} onHide={context.handleClose}>
				<Modal.Body>
					<Row className='bht-ye'>
						<Col xs={12}>Redirecting you to our ACA portal to view your options.</Col>
						<Col xs={12}>
							<div className='so-frm text-center'>
								<Button onClick={context.reset} size='md' variant='secondary' className='light-shadow'>
									SEE ACA PLAN{' '}
								</Button>
							</div>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</div>
	);
}

function Step14() {
	const context = useContext(ContextApi);

	if (context.currentStep !== 14) {
		return null;
	}
	return <div id='mediaalpha_placeholder'></div>;
}

class Insurance extends Component {
	static contextType = ContextApi;
	render() {
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
								<div className='circle-wrapper'>
									<img src={Icon} className="sideForm" />
								</div>
							</Col>
							<Col className='health' lg={6} xs={12}>
								<Step1 />
								<Step2 />
								<Step3 />
								<Step4 />
								<Step5 />
								<Step6 />
								<Step7 />
								<Step8 />
								<Step9 />
								<Step10 />
								<Step11 />
								<Step12 />
								<Step13 />
								<Step14 />
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
							© Copyright USA Health QUotes 2021
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Insurance;
