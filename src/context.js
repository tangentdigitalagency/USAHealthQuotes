import React, { Component, createContext } from 'react';
import axios from 'axios';
export const ContextApi = createContext();

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
		spouseUseTobaco: '',
		includeChildren: '',
		weight: '',
		show: false,
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
				householdIncome: value,
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
			let leadId = document.getElementById('leadid_token').value;
			let data = {
				lp_campaign_id: '601a0da83281b',
				lp_campaign_key: 'DvKL4cVyGh697dwNbJCY',
				lp_test: 1,
				health_insurance_plan: 'ACA PLAN',
				coverage_time: this.state.coverage,
				zip_code: this.state.zip,
				household_income: '15000',
				gender: this.state.gender.toLowerCase(),
				tobacco_use: this.state.tobaco === 'YES' ? true : false,
				weight: this.state.weight === 'YES' ? true : false,
				jornaya_lead_id: leadId,
			};
			try {
				let insurance = await axios.post('https://quotehound.leadspediatrack.com/post.do', data);
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
		currentStep = currentStep >= 11 ? 12 : currentStep + 1;
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
				}}>
				{this.props.children}
			</ContextApi.Provider>
		);
	}
}

export default ContextApiProvider;
