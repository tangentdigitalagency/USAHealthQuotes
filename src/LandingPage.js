import React from 'react';
import { Button, Card, Col, Collapse, Layout, Row } from 'antd';
import logo from './assets/img/logo.png';
import farmers from './assets/img/farmers.png';
import progressive from './assets/img/progressive.png';
import travelers from './assets/img/travelers.png';
import stateAuto from './assets/img/state-auto.png';
import heroImg from './assets/img/newHero.jpg';
import connectImg from './assets/img/connection.png';
import whatImg from './assets/img/car.jpeg';
import quote from './assets/img/quote.png';
import canvas from './assets/img/canvas.png';
import minutes from './assets/img/2minutes.png';
import best from './assets/img/best.png';
import budget from './assets/img/budget.png';
import { ReactComponent as YourSvg } from './assets/img/svg_2.svg';
import { ArrowRightOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';
function LandingPage() {
	const history = useHistory();
	const { Header, Footer, Content } = Layout;
	const { Panel } = Collapse;

	const handleRoute = () => {
		history.push('/main');
	};

	return (
		<div className="landing-page">
			<Layout>
				<Header>
					<Row>
						<Col xs={{ span: 24 }} lg={{ span: 12 }}>
							<a href='https://www.quantumassurance.com/quotes/business/business-insurance'>
								<img src={logo} width='181' alt='logo' />
							</a>
						</Col>
						<Col xs={{ span: 24 }} lg={{ span: 12 }} className='text-right'>
							<strong>Call For Free Quote</strong>
						</Col>
					</Row>
				</Header>
				<Content>
					<section className='section-one'>
						<Row>
							<Col span={24}>
								<div className='container-1'>
									<div className='block-left-hero'>
										<Row>
											<Col xs={{ span: 24 }} lg={{ span: 12 }}>
												<h1 className='hero_heading'>Better Coverage with Quantum. Get a free Commercial Insurance Quote</h1>
												<p className='text-white para-white'>
													A business owners policy includes protection for all major property and liability risk in one package. Offers protection to business owners against property damage, peril, business interruption, and liability. Get a free quote with Quantum today
													and see if your business qualifies for Business Owners Policy.{' '}
												</p>
												<Button onClick={handleRoute} type='block ' size='large' className='btn-large text-blue'>
													Free Commercial Quote <ArrowRightOutlined />
												</Button>
											</Col>
											<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
												<div className='block-right-hero'>
													<img src={heroImg} alt='heroImage' className='image-109' sizes='(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 1279px) 45vw, 570px' />
												</div>
											</Col>
										</Row>
									</div>
								</div>
							</Col>
						</Row>
					</section>
					<section className='section-two'>
						<div className='section-two-container'>
							<Row>
								<Col span={24}>
									<p className='cl01_title'>
										We are partnered with top rated companies
										<br />
									</p>
								</Col>
							</Row>
							<div className='section-two-img-container'>
								<Row>
									<Col xs={{ span: 24 }} lg={{ span: 12 }} className='px-md-4 py-3 '>
										<img src={travelers} alt='logo1' />
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 9, offset: 3 }} className='px-md-4 py-3 '>
										<img src={progressive} alt='logo1' className='ml-1' />
									</Col>
								</Row>
								<Row>
									<Col xs={{ span: 24 }} lg={{ span: 12 }} className='px-md-4 py-3 '>
										<img src={stateAuto} alt='logo1' />
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 10, offset: 2 }} className='px-md-4 py-3 '>
										<img src={farmers} alt='logo1' />
									</Col>
								</Row>
							</div>
						</div>
					</section>
					<section className='container'>
						<Row>
							<Col span={24}>
								<h1 className='font-weight-bold ml-md-5'>Business insurance</h1>
							</Col>
						</Row>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<p>
									A business owners policy includes protection for all major property and liability risk in one package. Offers protection to business owners against property damage, peril, business interruption, and liability. Get a free quote with Quantum Assurance today and see
									if your business qualifies for Business Owners Policy.{' '}
								</p>
								<p>
									These policies are better suited for smaller businesses as they have more personal financial exposure in the event of a loss. As a business owner, you must ensure that all aspects of your business are covered. From property damage to legal liabilities to
									employee-related risk.
								</p>
								<p>At Quantum, we offer the best coverage available for your business. Get your free quote today and check out what would be the best fit for your business.</p>
								<Button type='block ' size='large' className='btn-large text-white bg-blue'>
									Start Your Free Qoute <ArrowRightOutlined />
								</Button>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<div className='service-main-image business'></div>
							</Col>
						</Row>
					</section>
					<section className='container  my-3'>
						<Row>
							<Col span={24}>
								<h3 className='mx-auto text-center'>You should consider a Business Owners Policy if you:</h3>
							</Col>
						</Row>
						<Row className='mt-3'>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<ul>
									<li className='list-item-2'>
										<h6 className='h6-heading list'>Need general liability insurance coverage</h6>
									</li>
									<li className='list-item-2'>
										<h6 className='h6-heading list'>If you have business equipment that you want to make sure is protected</h6>
									</li>
								</ul>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<ul>
									<li className='list-item-2'>
										<h6 className='h6-heading list'>If you happen to own the building that you work at </h6>
									</li>
									<li className='list-item-2'>
										<h6 className='h6-heading list'>If you have employees that you don’t consider to be trustworthy</h6>
									</li>
								</ul>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col span={24}>
								<Button type='block ' size='large' className='btn-large text-white bg-blue'>
									Start Your Free Quote <ArrowRightOutlined />
								</Button>
							</Col>
						</Row>
					</section>
					<section className='container my-5'>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 8 }}>
								<div className='container d-flex h-100'>
									<div className='justify-content-center align-self-center'>
										<h1>Why Us?</h1>
										<p>
											Receiving a quote from an agent, company, or website can feel like a long process. But don’t let that push you into settling for the first quote you receive. Instead, you’re likely to find a much better deal if you’re willing to shop around. This is where
											Quantum comes in.
										</p>
										<Row className='mt-1 '>
											<Col span={24}>
												<Button type='block ' size='large' className='btn-large text-white bg-blue'>
													Start Your Free Qoute <ArrowRightOutlined />
												</Button>
											</Col>
										</Row>
									</div>
								</div>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 16 }}>
								<Row>
									<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={budget} />}>
											<Meta title='Budget Family' description='By comparing several companies at once it will allow you to choose what’s best for your budget' />
										</Card>
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 12 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={minutes} />}>
											<Meta title='2 Minutes' description='Some companies take 15 minutes. It only takes 2 minutes to enter your information and receive quotes.' />
										</Card>
									</Col>
								</Row>
								<Row className='mt-3'>
									<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={best} />}>
											<Meta title='We Want The Best' description='We care about you finding the best insurance option for you and your needs which is why we always connect you to the best option.' />
										</Card>
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 12 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<YourSvg />}>
											<Meta title='You have options' description='Getting a quote across multiple insurance companies empowers you to know what works best for you.' />
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
					</section>
					<section className='container my-5'>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<h1>What you need to know when choosing an insurer</h1>
								<p>Nobody enjoys dealing with things they don’t understand—especially when they have to pay for it</p>
								<p>For example, can you imagine putting yourself into debt just for the privilege of learning a bunch of facts and figures that you’ll probably never use again?</p>
								<p>Thankfully, Quantum has you covered when it comes to understanding car insurance.</p>
								<Row className='mt-1 '>
									<Col span={24}>
										<Button type='block ' size='large' className='btn-large text-white bg-blue'>
											Start Your Free Qoute <ArrowRightOutlined />
										</Button>
									</Col>
								</Row>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<img className='pic' src={canvas} alt='' />
							</Col>
						</Row>
					</section>
					<section className='container mt-md-5'>
						<Row>
							<Col span={24} className='text-center'>
								<h1>How to choose a company</h1>
							</Col>
						</Row>
						<Row className='mb-5 mt-3'>
							<Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }} className='text-center'>
								<Collapse expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 90 : 0} />} expandIconPosition='right'>
									<Panel header='Figure Out Your Needs' key='1'>
										<div className='container text-left'>
											<p>Most people don’t enjoy having someone try to sell them something—that’s just human nature. But what’s even more frustrating is having someone try to sell you something when you kind of think you might need it, but you’re not sure.</p>
											<p>Here are some other questions to think through and answer before you seek out insurance companies:</p>
											<p>
												<strong>Do you prefer to have lower monthly payments or lower deductibles?</strong>
											</p>
											<p>
												<strong>Do you want to speak with the same agent each time you talk to your insurance company, or are you okay being assigned a new person with each new claim?</strong>
											</p>
											<p>
												<strong>What types of auto insurance do you need?</strong>
											</p>
											<p>
												<strong>Those types include liability, collision, comprehensive, personal injury, uninsured motorist, and more. How much can you afford to pay for car insurance?</strong>
											</p>
										</div>
									</Panel>
									<Panel header='See What Companies Can Offer' key='2'>
										<div className='container text-left'>
											<p>
												Once you have a good idea of what you need—and what you don’t need—from your car insurance policy, it’s time to see what insurance companies are willing to offer. Because make no mistake: rates and policies do differ from company to company, and
												sometimes even agent to agent.
											</p>
											<br />
											<p>
												Some of the policy decisions will be outside of your control. For example, each state has minimum coverage thresholds, which means you won’t be able to cut some types of insurance altogether, and there may be a certain amount of coverage you have to
												purchase in order to be legally insured in your state. Within those boundaries, however, there can be a lot of room for flexibility.
											</p>
										</div>
									</Panel>
									<Panel header='Shop Around' key='3'>
										<div className='container text-left'>
											<p>
												Receiving a quote from an agent, company, or website can feel like a long process. But don’t let that push you into settling for the first quote you receive. Instead, you’re likely to find a much better deal if you’re willing to shop around. Here’s the
												great news: Quotehound can help you save time and effort in two ways when it comes to comparing car-insurance companies and quotes.
											</p>
											<br />
											<p>First, offers a quick and simple way to review and compare auto-insurance d</p>
											<p>
												‍Second, by entering your Zip code here, will do the hard work for you by matching you with qualified agents in your state who can contact you with their best policy rates based on the coverage you need. All you have to do is sit back and choose the
												deal that fits you best.
											</p>
										</div>
									</Panel>
								</Collapse>
							</Col>
						</Row>
						<Row className='mt-1 text-center'>
							<Col span={24}>
								<Button type='block ' size='large' className='btn-large text-white bg-blue'>
									Start Your Free Qoute <ArrowRightOutlined />
								</Button>
							</Col>
						</Row>
					</section>
					<section className='container mt-md-5'>
						<Row>
							<Col span={24} className='text-center'>
								<h1>What people say about us</h1>
							</Col>
						</Row>
						<Row className='mt-md-5'>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<img
									src={whatImg}
									width='723'
									sizes='(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 723px'
									srcSet='https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-500.jpeg 500w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-1080.jpeg 1080w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-1600.jpeg 1600w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%20(1).jpg 2000w'
									alt=''
									className='client-image-big w-100 rounded'
								/>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
								<img src={quote} alt='quote' width='21' className='quote' />
								<p className='quote-text-v1'>
									<em className='font-italic italic-text-4'>
										“I have never had such a great experience getting insurance quotes than I had using Quantum. &nbsp;Their form is super quick and simple. &nbsp;As soon as I hit submit, they matched me with a great insurance agent named Sandy. &nbsp;I had all the information
										and quotes I had to make the decision to switch my insurance. &nbsp;Thank you Quantum for the great connection! ”<br />
									</em>
								</p>
								<p>Matthew</p>
								<Row className='mt-1'>
									<Col span={24}>
										<Button type='block ' size='large' className='btn-large text-white bg-blue'>
											Start Your Free Qoute <ArrowRightOutlined />
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</section>
					<section className='section-connect mt-5 pb-5'>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 9, offset: 3 }}>
								<img
									src={connectImg}
									sizes='(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 43vw, (max-width: 1279px) 40vw, 515px'
									srcSet='https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0d8c14f1c09_developer-4027337_960_720-p-500.png 500w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0d8c14f1c09_developer-4027337_960_720.png 788w'
									alt=''
								/>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<div className='container d-flex h-75'>
									<div className='justify-content-center align-self-center'>
										<h2 className='mx-auto text-center '>We connect you with live rates in less than 2 minutes</h2>
										<Row className='mt-md-5'>
											<Col xs={{ span: 24 }}>
												<CheckOutlined style={{ color: '#008000' }} /> <p className='d-inline ml-3 text-co2'>Quick and reliable</p>
											</Col>
											<Col xs={{ span: 24 }}>
												<CheckOutlined style={{ color: '#008000' }} /> <p className='d-inline ml-3 text-co2'>Quantum gives you tips!</p>
											</Col>
											<Col xs={{ span: 24 }}>
												<CheckOutlined style={{ color: '#008000' }} /> <p className='d-inline ml-3 text-co2'>Secure and safe</p>
											</Col>
											<Col xs={{ span: 24 }}>
												<CheckOutlined style={{ color: '#008000' }} /> <p className='d-inline ml-3 text-co2'>We work with top rated companies!</p>
											</Col>
										</Row>
										<Row className='mt-4'>
											<Col span={24}>
												<Button type='block ' size='large' className='btn-large text-white bg-blue'>
													Start Your Free Qoute <ArrowRightOutlined />
												</Button>
											</Col>
										</Row>
									</div>
								</div>
							</Col>
						</Row>
					</section>
					<section className='trusted-companies pt-4'>
						<div className='container'>
							<Row className='py-5'>
								<Col span={24}>
									<h3 className='mx-auto text-center text-white'>
										Trusted by some of leading <br />
										companies in the world
									</h3>
								</Col>
							</Row>
							<Row>
								<Col xs={{ span: 24 }} lg={{ span: 6 }} className='section-two-imgs '>
									<img src={travelers} alt='logo1' className='bg-white custom-rounded py-1' />
								</Col>
								<Col xs={{ span: 24 }} lg={{ span: 6 }} className='section-two-imgs '>
									<img src={progressive} alt='logo1' className='ml-1 bg-white custom-rounded py-2 px-2' />
								</Col>
								<Col xs={{ span: 24 }} lg={{ span: 6 }} className='section-two-imgs mt-md-3'>
									<img src={stateAuto} alt='logo1' className='bg-white custom-rounded py-2 px-1' />
								</Col>
								<Col xs={{ span: 24 }} lg={{ span: 6 }} className='section-two-imgs  mt-md-3'>
									<img src={farmers} alt='logo1' className='bg-white custom-rounded py-2 px-1' />
								</Col>
							</Row>
						</div>
					</section>
				</Content>
				<Footer className='footer'>
					<div className='footer-container'>
						<div className='footer-top-wrap-2'>
							<h1 className='heading-16'>Quantum Assurance International</h1>
						</div>
						<div className='div-block-58'></div>
					</div>
				</Footer>
			</Layout>
		</div>
	);
}
export default LandingPage;
