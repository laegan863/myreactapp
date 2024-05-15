import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../style/style.css';
function Index() {
	const banner = {
		backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUvhi-mYdaquhn2WlKlHKiP6VEQQ0izxhKg&s)',
		height: '600px',
		width: '100%',
		backgroundSize: 'cover',
		color: 'white',
	};
	const paragraph1 = {
		fontSize: '18px'
	}

	const explor = () =>{

		alert("button clicked");

	}

	const contact = () =>{

		alert("button clicked");

	}

	return (
		<div className="mb-5">
			<div style={banner} className="d-flex justify-content-center align-items-center display-4 fw-bold">
				<div className="row text-lg-start text-center px-lg-0 px-5">
					<div className="col-lg-6 col-12">
						<div className="display-3 fw-bold text-light">
							Empowering Your Business Through Tech.
						</div>
						<p style={paragraph1} className="mt-3">
							Crafting bespoke IT solutions for your unique challenges. 
							Dive into the future with Techsolve.pro
						</p>
						<div className="my-5 d-flex gap-3 justify-content-lg-start justify-content-center">
							<button onClick={explor} className="btn btn-outline-primary text-light rounded-5 py-3 col-lg-4 col-6 fw-semibold">
								Explore Our Services
							</button>
							<button onClick={contact} className="btn btn-outline-secondary text-light rounded-5 col-lg-4 col-6 fw-semibold">
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="body">
				<div className="container my-5">
					<h5 className="text-center fw-bold">
						PARTNERS
					</h5>
					<h1 className="text-center fw-bold">
						We're Working With
					</h1>
					<div className="row mt-5" id="img">
						<div className="col-lg-2 col-6 d-flex">
							<div className="card cards p-5">
								<img className="img-fluid" src="https://techsolve.pro/wp-content/uploads/2023/10/cyberjet-l2-p6-4.png" />
							</div>
						</div>
						<div className="col-lg-2 col-6 d-flex">
							<div className="card cards p-5">
								<img className="img-fluid" src="https://techsolve.pro/wp-content/uploads/2023/10/cyberjet-l2-p5-1-2.png" />
							</div>
						</div>
						<div className="col-lg-2 col-6 d-flex">
							<div className="card cards p-5">
								<img className="img-fluid" src="https://techsolve.pro/wp-content/uploads/2023/10/cyberjet-l2-p4-1-2.png" />
							</div>
						</div>
						<div className="col-lg-2 col-6 d-flex">
							<div className="card cards p-5">
								<img className="img-fluid" src="https://techsolve.pro/wp-content/uploads/2023/10/cyberjet-l2-p3-1-2.png" />
							</div>
						</div>
						<div className="col-lg-2 col-6 d-flex">
							<div className="card cards p-5">
								<img className="img-fluid" src="https://techsolve.pro/wp-content/uploads/2023/10/cyberjet-l2-p2-1-4.png" />
							</div>
						</div>
						<div className="col-lg-2 col-6 d-flex">
							<div className="card cards p-5">
								<img className="img-fluid" src="https://techsolve.pro/wp-content/uploads/2023/10/cyberjet-l2-p1-1-4.png" />
							</div>
						</div>
					</div>
				</div>
				<div className="container my-5 py-5">
					<div className="row">
						<div className="col-lg-6 mt-5 d-flex align-items-center">
							<img src="https://techsolve.pro/wp-content/uploads/2023/10/cyberjet_hackerwoman.jpg" className=" rounded-4 img-fluid" />
						</div>
						<div className="col-lg-6 mt-5">
							<p className="text-start fw-semibold">
								WHO WE ARE
							</p>
							<p className="display-5 fw-bold">
								Meet Techsolve.pro: Minimize Risks, Maximize Productivity
							</p>
							<p className="fw-semibold">
								<p>Our Journey:</p>
								Born in Morocco, Techsolve.pro was founded with a singular vision: to provide unparalleled IT solutions tailored for every need. 
								Over the past two years, our local success story has been nothing short of inspiring. 
								We’ve carved a niche for ourselves by consistently delivering excellence in a diverse technological landscape.

								<p className="mt-5">
									Our Evolution:
								</p>

								Buoyed by our local achievements, we’re now setting our sights beyond Moroccan shores. 
								With an ambition to serve the US and European markets, we are expanding our horizons and refining our strategies. 
								At Techsolve.pro, we believe in growth, innovation, and the limitless potential of technology.
							</p>
							<ul className="fw-semibold">
							    <li>Client-Centricity: Your needs shape our solutions.</li>
							    <li>Innovation: Staying ahead in a rapidly evolving tech world.</li>
							    <li>Integrity: Building trust, one successful project at a time.</li>
							    <li>Global Perspective: Adapting global best practices for local challenges and vice versa.</li>
							    <li>Continuous Learning: Investing in knowledge to deliver the latest and most effective solutions to our clients.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="container my-5">
				<div className="text-center">
					<p className="fw-bold text-darkblue">WHAT WE DO</p>
					<p className="display-4 fw-bold text-darkblue">
						Crafting Digital Excellence: Our Tech Blueprint
					</p>
				</div>
				<div className="row mt-5">
					<div className="col-lg-3 col-6 d-flex my-5">
						<div className="card p-5 bg-dark-blue">
							<p className="fs-4 fw-semibold text-light">Streamlined Processes</p>
							<p className="text-light fs-5">
								We meticulously analyze and refine your workflows, 
								cutting out redundancies and ensuring smoother operations.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-6 d-flex my-5">
						<div className="card p-5 bg-dark-blue">
							<p className="fs-4 fw-semibold text-light">Enhanced Security</p>
							<p className="text-light fs-5">
								In a world rife with digital threats, we prioritize your data's security, 
								implementing cutting-edge safeguards and continuous monitoring.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-6 d-flex my-5">
						<div className="card p-5 bg-dark-blue">
							<p className="fs-4 fw-semibold text-light">Customized Solutions</p>
							<p className="text-light fs-5">
								Recognizing that no two challenges are the same, 
								our solutions are tailored to meet your specific needs and objectives.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-6 d-flex my-5">
						<div className="card p-5 bg-dark-blue">
							<p className="fs-4 fw-semibold text-light">Continuous Support</p>
							<p className="text-light fs-5">
								Our relationship doesn't end at implementation. We offer ongoing support, 
								ensuring that you're always ahead in the tech game.
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 d-flex justify-content-center align-items-center">
					<button	className="btn bg-dark-blue text-light fw-bold py-3 rounded-3 col-lg-3 col-6">
						Get Started
					</button>
				</div>
			</div>
			<div className="container"></div>
		</div>
	);
}

export default Index;
