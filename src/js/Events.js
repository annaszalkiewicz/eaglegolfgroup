import React, { Component } from 'react';
import Hotel from '../img/Hyatt-Regency-Aqaba.jpg';
import Stadium from '../img/aqaba-football-stadium.jpg';
import Fade from 'react-reveal/Fade';
import MetaTags from 'react-meta-tags';

class Events extends Component {
	render() {
		return (
			<section id='events'>
				<MetaTags>
					<title>Events | Eagle Golf Group</title>
					<meta
						name='description'
						content='Eagle Golf Group is working hard in partnership with The National Culture and Tourist Board of Albania and together with both Governments for a magnificent charity Football event in Albania.'
					/>
				</MetaTags>
				<main className='events-container' id='main-content'>
					<Fade left>
						<header className='grid-item events-item-1 section-header'>
							<h2>Events</h2>
						</header>
					</Fade>
					<Fade right>
						<div className='grid-item events-item-2'>
							<p>
								After an amazingly successful charity Golf and Football Tour
								Event for the former Aston Villa and Celtic club captain and
								captain of Bulgaria - Stiliyan Petrov in May 2013 Eagle Golf
								Group are extremely honoured and proud to announce other charity
								tour event. The Management Team of Eagle Golf are currently
								working hard in partnership with both British and Jordanian
								Governments to present our next spectacular event coming soon in
								Aqaba, Jordan. We envisage that Jordanian football federation
								will support this magnificent event. We hope it will be endorsed
								and supported by both British and Jordanian Ambassadors together
								with Government dignitaries.
							</p>

							<p>
								This magnificent good cause charity football/golf event will be
								announced once we have the all clear and green light from the UK
								Government.
							</p>
							<p>
								The charity football match will be against former England
								Legends X1 vs. former Jordanian Legends XI.
							</p>
						</div>
					</Fade>
					<Fade left delay={500}>
						<div className='grid-item events-item-3 aqaba'>
							<figure>
                <img src={Hotel} alt='Hyatt Regency Hotel in Aqaba' />
								<figcaption>Hyatt Regency Hotel in Aqaba</figcaption>
							</figure>
						</div>
					</Fade>
					<Fade left delay={600}>
						<div className='grid-item events-item-4 aqaba'>
							<figure>
								<img src={Stadium} alt='Aqaba Football Stadium' />
								<figcaption>Aqaba Football Stadium</figcaption>
							</figure>
						</div>
					</Fade>
					<Fade right>
						<div className='grid-item events-item-5'>
							<p>
								We are also organising a magnificent Gala Dinner Presentation
								for the Jordanian event which we are honoured will be hosted by
								Aqaba Tourism and Economic Authority. The Gala Dinner
								Presentation will be held at the prestigous 5 star Hyatt Regency
								Hotel.
							</p>
							<p>
								Further information how to book and join this unique charity
								event and meet your football heroes will be announced in October
								2020.
							</p>
						</div>
					</Fade>
				</main>
			</section>
		);
	}
}

export default Events;
