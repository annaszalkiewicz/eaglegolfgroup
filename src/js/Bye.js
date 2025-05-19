import React, { Component } from 'react';

class Bye extends Component {
	state = {
		open: false,
	};

	componentDidMount() {
		this.openModal();
	}

	closeModal = () => {
		this.setState({ open: false });
	};

	openModal = () => {
		this.setState({ open: true });
	};
	render() {
		if (this.state.open) {
			return (
				<dialog className='modal'>
					<button className='close-button' onClick={this.closeModal}>
						X
					</button>
					<h2>Subject: Celebrating the Retirement of John J. Wade</h2>
					<p>Dear All,</p>
					<p>
						After a remarkable career spanning decades in the golf, travel and
						events industry, I am both happy and sad to announce with both
						gratitude and heartfelt congratulations that I will be retiring from
						my role at Eagle Golf Group, effective from 01 June 2025.
					</p>
					<p>
						I was the founder and CEO of Eagle Golf Group in 2000, bringing
						leadership, integrity, and an unwavering passion for the game of
						golf. The past 25 years have been some of the best days of my life.
					</p>
					<p>
						My vision and dedication has been to shape not only our company’s
						operations but also to leave a lasting impact across the wider golf
						community especially to Greece as it is so close to my heart.
					</p>
					<p>
						Through course development, promoting emerging destinations and
						fostering partnerships to create unique events I have been fortunate
						to work with many great high profile celebrity’s and individuals,
						many of whom I am proud to now count as friends.
					</p>
					<p>
						Whilst I will miss the excitement of creating successful trips and
						events and seeing little known corners of the globe flourish with
						the help of tourism, it is time to enter a new chapter of life,
						filled with more time for family, friends and, of course, travel.
					</p>
					<p>
						I would like to thank all of you that I have worked and collaborated
						with over my career for making my working life such a pleasurable
						and rewarding time. I look forward to spending more time with you if
						our paths cross in future, and from now on it will all be
						pleasure!!.
					</p>
					<p>
						Finally, the website of my company will close on 31 May 2025. My new
						personal e-mail address will automatically start from: 01 June 2025{' '}
						<strong>john@johnwade.uk</strong>
					</p>
				</dialog>
			);
		}
    return (<></>)
	}
}

export default Bye;
