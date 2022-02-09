import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Idg from '../img/idg.png';
import Wfl from '../img/wfl.jpg';
import Fade from 'react-reveal/Fade';

class Partners extends Component {
	render() {
		return (
			<main id='partners main-content' className='our-partners-container'>
				<MetaTags>
					<title>Our Partners | Eagle Golf Group</title>
					<meta
						name='description'
						content='Eagle Golf Group co-operates with International Golf Design and Playonpro to provide its services on the highest level.'
					/>
				</MetaTags>
				<Fade left>
					<header className='grid-item section-header our-partners-item-1'>
						<h2>Our Partners</h2>
					</header>
				</Fade>
				<Fade bottom>
					<div className='grid-item our-partners-item-2'>
						<img src={Idg} alt='Internation Design Group' />
					</div>
				</Fade>
				<Fade right>
					<div className='grid-item our-partners-item-3'>
						<p>
							Working together with International Golf Design, Eagle Golf Group
							can offer a full range of design and consultancy services for the
							creation of world class golf developments including building
							architecture, master planning landscape architecture and golf
							course design throughout the world. From initial concept work to
							the delivery of entire golf resorts together with project
							promotion and project management.
						</p>
					</div>
				</Fade>
				<Fade left delay={100}>
					<div className='grid-item our-partners-item-4'>
						<p>
							International Golf Design deals with all aspects of the design,
							development and consultancy of purpose built residential,
							commercial and sports communities, predominantly those involving
							golf.
						</p>
						<p>
							The company was established to provide the best possible advice
							and assistance to new and existing facilities. Our broad array of
							interconnected disciplines creates a single point of design
							responsibility which eliminates the inevitable communication
							issues between the consultant team. This format is quicker,
							faster, cheaper and more coherent than traditional design methods.
						</p>
					</div>
				</Fade>
				<Fade right delay={200}>
					<button className='grid-item our-partners-item-5'>
						<a
							href='https://www.internationaldesigngroup.co.uk'
							target='_blank'
							rel='noopener noreferrer'
						>
							Learn more about International Golf Design
						</a>
					</button>
				</Fade>
				{/* <Fade left delay={300}>
					<div className='grid-item our-partners-item-6'>
						<img src={Wfl} alt='World Football Legends' />
					</div>
				</Fade>
				<Fade bottom delay={400}>
					<div className='grid-item our-partners-item-7'>
						<p>
							Working closely with the likes of Robbie Fowler, Teddy Sheringham,
							Michael Owen Steve McManaman and Robert Pires. WFL has helped
							dozens of International Organisations and smaller businesses
							deliver unforgettable client and customer experiences.
						</p>
					</div>
				</Fade>
				<Fade right delay={500}>
					<div className='grid-item our-partners-item-8'>
						<p>
							Organizing events across the world, we specialize in creating
							money - can’t-buy activations with ex-professional football and
							sports stars.
						</p>
						<p>
							World Football Legends connect passionate football fans in England
							and throughout Europe with childhood heroes like Ian Wright, John
							Barnes, David James, John Arne Riise, Paul Scholes, Emmanuel Petit
							and Louis Saha
						</p>
					</div>
				</Fade> */}
			</main>
		);
	}
}

export default Partners;
