import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Charity from '../img/charity-icon.svg';
import Flag from '../img/flag-icon.svg';
import Football from '../img/football-icon.svg';
import Golf from '../img/golf-icon.svg';
import Dolar from '../img/monetization-icon.svg';
import Tv from '../img/tv-icon.svg';
import World from '../img/world-icon.svg';
import Wfl from '../img/wfl.jpg';
import Idg from '../img/idg.png';
// import Hotel from '../img/Hyatt-Regency-Aqaba.jpg';
// import Stadium from '../img/aqaba-football-stadium.jpg';
import Logo from '../img/logo.svg';
import LogoWhiteReversed from '../img/logo-white-reversed.svg';
import ContactDetails from './ContactDetails';
import TestimonialsShort from './TestimonialsShort';
import Fade from 'react-reveal/Fade';

class Home extends Component {
	constructor(props) {
		super(props);
		this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
		this.onRightArrowClick = this.onRightArrowClick.bind(this);
	}

	onRightArrowClick = () => {
		console.log('Clicked right');
	};

	onLeftArrowClick = () => {
		console.log('Clicked left');
	};

	render() {
		return (
			<div className='container' id='home'>
				<MetaTags>
					<title>
						Eagle Golf Group | Charity Sporting Events | Golf Events | Football
						Events
					</title>
					<meta
						name='description'
						content='Eagle Golf Group specializes in organizing celebrity charity sporting events, especially golf and football events. '
					/>
				</MetaTags>
				<a href='#main-content' className='skip-link'>
					Skip to main content
				</a>

				<div className='carousel'>
					<div className='slider-container' />
				</div>
				<img src={LogoWhiteReversed} className='logo-reversed' alt='Eagle' />
				<div className='hero-text'>
					<Fade left>
						<h2>
							A bird's eye view on the world of celebrity charity sporting
							events
						</h2>
					</Fade>
					<Fade right>
						<Link
							to='/contact'
							className='btn-primary button-carousel'
							role='button'
						>
							Contact Us <i className='material-icons btn-carousel'>send</i>
						</Link>
					</Fade>
				</div>
				<main>
					<div className='grid-container' id='main-content'>
						<Fade left>
							<div className='grid-item home-logo'>
								<div className='home-container'>
									<img src={Logo} alt='Eagle Golf Group logo' />
									<h2>Eagle Golf Group</h2>
								</div>
							</div>
						</Fade>
						<Fade right>
							<div className='grid-item home-intro'>
								<p>
									Eagle Golf Group offers a unique service to our clients by
									introducing the full spectrum of consultancy services for the
									construction of international golf resorts, from initial
									concept to the delivery of a championship-standard golf
									resort. The construction, promotion and management of 5 star
									luxury hotels complement our unique business from an initial
									feasibility study to the completed golf course.
								</p>
								<p>
									Our team of professional Golf Tourism Advisors have worked at
									director level in the travel promotion industry for over 50
									years. We conduct regular road show events with our clients,
									promoting new Golf Resort destinations.
								</p>
								<p>
									In addition, our management team are proud to announce that with the England Football Legends we envisage that spectacular event in Saudi Arabia for October 2022.
								</p>
							</div>
						</Fade>
						<Fade left>
							<header
								id='goals'
								className='grid-item goals-header section-header'
							>
								<h2>Our Goals</h2>
							</header>
						</Fade>
						<Fade bottom>
							<div className='grid-item goals-list goals-item-1'>
								<img src={Charity} alt='Charity' />
								<p>
									Organizing charity sporting events to support charities in
									various countries
								</p>
							</div>
						</Fade>
						<Fade right>
							<div className='grid-item goals-list goals-item-2'>
								<img src={Dolar} alt='Charity' />
								<p>Raising funds for charities</p>
							</div>
						</Fade>
						<Fade left>
							<div className='grid-item goals-list goals-item-3'>
								<img src={Golf} alt='Charity' />
								<p>Supporting incoming tourism and golf awareness</p>
							</div>
						</Fade>
						<Fade bottom>
							<div className='grid-item goals-list goals-item-4'>
								<img src={Flag} alt='Charity' />
								<p>Working in partnership with overseas governements</p>
							</div>
						</Fade>
						<Fade right>
							<div className='grid-item goals-list goals-item-5'>
								<img src={World} alt='Charity' />
								<p>Raising the profile of the country</p>
							</div>
						</Fade>
						<Fade left>
							<div className='grid-item goals-list goals-item-6'>
								<img src={Football} alt='Charity' />
								<p>Partnership with The England Legends Football Team</p>
							</div>
						</Fade>
						<Fade bottom>
							<div className='grid-item goals-list goals-item-7'>
								<img src={Tv} alt='Charity' />
								<p>
									Associating with National Media and TV companies to maximise
									the event we are organizing
								</p>
							</div>
						</Fade>
						<Fade right>
							<div className='grid-item goals-button goals-item-8'>
								<Link to='/ethos' role='button'>
									Learn more about us
								</Link>
							</div>
						</Fade>
						{/* <Fade left>
							<header className='grid-item section-header events-header'>
								<h2>Next Event</h2>
							</header>
						</Fade>
						<Fade right>
							<div className='grid-item event-list event-item-1'>
								<h3>Celebrity Football/Golf Charity Event Aqaba, Jordan</h3>
								<hr />
								<h3>Dates: TBA</h3>
								<p>Aqaba National Football Stadium and Hyatt Regency Hotel</p>
							</div>
						</Fade>
						<Fade left>
							<div className='grid-item event-list event-item-2'>
								<figure>
									<img src={Hotel} alt='Hyatt Regency Hotel in Aqaba' />
									<figcaption>Hyatt Regency Hotel in Aqaba</figcaption>
								</figure>
							</div>
						</Fade>
						<Fade bottom>
							<div className='grid-item event-list event-item-3'>
								<figure>
									<img src={Stadium} alt='Aqaba Football Stadium' />
									<figcaption>Aqaba Football Stadium</figcaption>
								</figure>
							</div>
						</Fade>

						<Fade right>
							<div className='grid-item event-button event-item-4'>
								<Link to='/jordan-charity-football-golf-event' role='button'>
									Learn more about this goodwill event
								</Link>
							</div>
						</Fade> */}
						<Fade left>
							<header className='grid-item section-header testimonials-header'>
								<h2>Testimonials</h2>
							</header>
						</Fade>
						<TestimonialsShort />
						<Fade left>
							<div className='grid-item testimonials-button'>
								<Link to='/testimonials' role='button'>
									Read more testimonials
								</Link>
							</div>
						</Fade>
						<Fade left>
							<header className='grid-item section-header partners-item-1'>
								<h2>Our Partners</h2>
							</header>
						</Fade>
						<Fade left>
							<div className='grid-item partners-item-2'>
								<a
									href='http://www.internationaldesigngroup.co.uk/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={Idg} alt='International Design Group' />
								</a>
							</div>
						</Fade>
						<Fade bottom>
							<div className='grid-item partners-item-3'>
								{/* <img
									src={Wfl}
									alt='World Football Legends'
									style={{ width: '100%' }}
								/> */}
							</div>
						</Fade>
						<Fade right>
							<div className='grid-item partners-item-4 partners-button'>
								<Link to='/partners' role='button'>
									Learn more about our partners
								</Link>
							</div>
						</Fade>
						<Fade left>
							<header className='grid-item section-header contact-item-1'>
								<h2>Contact Us</h2>
							</header>
						</Fade>
						<ContactDetails />
						<Fade right>
							<div className='grid-item contact-item-3 contact-button'>
								<img src={Logo} alt='Logo' />
								<Link to='/contact' role='button'>
									Send message
								</Link>
							</div>
						</Fade>
					</div>
				</main>
			</div>
		);
	}
}

export default Home;
