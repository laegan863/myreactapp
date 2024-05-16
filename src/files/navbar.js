import React from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../style/style.css';
function Navbar (){
	return(
		<>
		<nav className="navbar bg-dark-blue navbar-expand-lg bg-body-tertiary py-4 px-5">
		  <div className="container-fluid">
		    <a className="navbar-brand text-light fw-bold" href="#">Navbar</a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNav">
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
		  </div>
		</nav>
		<Outlet/>
		</>
	);
}

export default Navbar;