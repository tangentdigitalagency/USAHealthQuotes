import React, { Component, createContext } from 'react';
import axios from 'axios';
export const ContextApi = createContext();

const incoms = [10000, 47000, 30000, 16000];
class ContextApiProvider extends Component {
	state = {
		currentStep: 1,
		zip: '',
		coverage: '',
		householdIncome: '',
		gender: '',
		tobaco: '',
		includeSpouce: '',
		spouceGender: '',
		year: '',
		date: '',
		month: '',
		year2: '',
		date2: '',
		month2: '',
		first_name: '',
		last_name: '',
		email_address: '',
		phone_cell: '',
		spouseUseTobaco: '',
		includeChildren: '',
		weight: '',
		show: false,
		agree: false,
		pre_exisiting_conditions: true,
		landing_page: 'http://localhost:3000',
	};

	_next = async (value) => {
		let currentStep = this.state.currentStep;
		if (this.state.currentStep === 2) {
			this.setState({
				coverage: value,
			});
		}
		if (this.state.currentStep === 3) {
			this.setState({
				householdIncome: incoms[value],
			});
		}
		if (this.state.currentStep === 4) {
			this.setState({
				gender: value,
			});
		}
		if (this.state.currentStep === 6) {
			this.setState({
				tobaco: value,
			});
		}
		if (this.state.currentStep === 7) {
			this.setState({
				includeSpouce: value,
			});
		}
		if (this.state.currentStep === 8) {
			this.setState({
				spouceGender: value,
			});
		}
		if (this.state.currentStep === 10) {
			this.setState({
				spouseUseTobaco: value,
			});
		}
		if (this.state.currentStep === 11) {
			this.setState({
				includeChildren: value,
			});
		}
		if (this.state.currentStep === 12) {
			this.setState({
				weight: value,
			});
		}
		if (this.state.currentStep === 13) {
			let leadId = document.getElementById('leadid_token').value;
			let formData = new FormData();
			formData.append('lp_campaign_id', '601a0da83281b');
			formData.append('lp_campaign_key', 'DvKL4cVyGh697dwNbJCY');
			// formData.append('lp_test', 1);
			formData.append('health_insurance_plan', 'ACA PLAN');
			formData.append('coverage_time', this.state.coverage);
			formData.append('zip_code', this.state.zip);
			formData.append('household_income', this.state.householdIncome);
			formData.append('gender', this.state.gender.toLowerCase());
			formData.append('tobacco_use', this.state.tobaco === 'YES' ? true : false);
			formData.append('weight', this.state.weight === 'YES' ? true : false);
			formData.append('jornaya_lead_id', leadId);
			formData.append('first_name', this.state.first_name);
			formData.append('last_name', this.state.last_name);
			formData.append('email_address', this.state.email_address);
			formData.append('phone_cell', this.state.phone_cell);
			formData.append('landing_page', this.state.landing_page);
			formData.append('pre_exisiting_conditions', this.state.pre_exisiting_conditions);
			try {
				let insurance = await axios.post('https://quotehound.leadspediatrack.com/post.do', formData);
				console.log(insurance);
				if (insurance.status === 201 || insurance.status === 200) {
					console.log(insurance);
					this.setState({
						show: true,
					});
				}
			} catch (err) {
				console.log(err);
				if (err.response && err.response.message) {
					console.log(err.response.message);
				}
			}
		}
		currentStep = currentStep >= 12 ? 13 : currentStep + 1;
		if (this.state.currentStep === 7 && value === 'NO') {
			currentStep = 11;
		}
		this.setState({
			currentStep: currentStep,
		});
	};
	zipChange = (e) => {
		this.setState({
			zip: e.target.value,
		});
	};
	handleChangeDate1 = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleChangeDate2 = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleShow = () => {
		this.setState({
			show: true,
		});
	};
	handleClose = () => {
		this.setState({
			show: false,
		});
	};
	onChangeAgree = (e) => {
		console.log(`checked = ${e.target.checked}`);
		this.setState({
			agree: e.target.checked,
		});
	};

	changeLastStepForm = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};
	reset = () => {
		this.setState({
			currentStep: 1,
			zip: '',
			coverage: '',
			householdIncome: '',
			gender: '',
			tobaco: '',
			includeSpouce: '',
			spouceGender: '',
			year: '',
			date: '',
			month: '',
			year2: '',
			date2: '',
			month2: '',
			first_name: '',
			last_name: '',
			email_address: '',
			phone_cell: '',
			spouseUseTobaco: '',
			includeChildren: '',
			weight: '',
			show: false,
			agree: false,
			pre_exisiting_conditions: true,
			landing_page: 'http://localhost:3000',
		});
	};
	render() {
		return (
			<ContextApi.Provider
				value={{
					...this.state,
					_next: this._next,
					zipChange: this.zipChange,
					handleChangeDate1: this.handleChangeDate1,
					handleChangeDate2: this.handleChangeDate2,
					handleShow: this.handleShow,
					handleClose: this.handleClose,
					onChangeAgree: this.onChangeAgree,
					changeLastStepForm: this.changeLastStepForm,
					reset: this.reset,
				}}>
				{this.props.children}
			</ContextApi.Provider>
		);
	}
}

export default ContextApiProvider;
