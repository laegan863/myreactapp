import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
	return(
			<footer className="container-fluid bg-dark-blue">
				<div className="row justify-content-center text-start p-5 text-light">
					<div className="col-lg-4 col-12 p-5">
						<p>
							Bridging tech gaps with expertise and innovation, Techsolve.
							pro propels digital journeys, ensuring secure and optimized experiences.
						</p>
					</div>
					<div className="col-lg-4 col-12 p-5">
						<h3>Usefull Links</h3>
						<ul className="navbar-nav ms-auto fw-semibold">
					        <li className="nav-item">
					        	<Link className="nav-link active" to="/">Home</Link>
					        </li>
					        <li className="nav-item">
					        	<Link className="nav-link" to="/about-us">About Us</Link>
					        </li>
					        <li className="nav-item">
					        	<Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
					        </li>
					        <li className="nav-item">
					        	<Link className="nav-link" to="/terms-and-condition">Terms&Conditions</Link>
					        </li>
					     </ul>
					</div>
					<div className="col-lg-4 col-12 p-5">
						<h3>Our Services</h3>
						<p className="fw-semibold">
							<u>contact@tsanch.com</u>
						</p>
						<p className="fw-semibold">
							77 Sugar Creek Center Blvd
						</p>
						<p className="fw-semibold">
							Suite 603
						</p>
						<p className="fw-semibold">
							Sugar Land, TX 77478
						</p>
					</div>
				</div>
			</footer>
	);
}

export default Footer;