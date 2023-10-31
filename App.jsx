import React from "react";
import { createRoot } from "react-dom/client";

import logo from "./Assets/Images/Logo.png";

/**
 * 
 * Header
 * - Logo
 * - Nav Itmes
 * Body
 * - Search
 * - ReastaurentContainer
 * 	-	ReastaurentCard
 * Footer
 * - Copyright
 * - Links
 * - Contact
 * 
 */


const Header = () => {
	return (
		<div className="header">
			<div className="logoContainer">
				<img src={logo} alt="Logo of tasty foods" className="logo" />
			</div>
			<div className="navItems">
				<ul>
					<li>Home</li>
					<li>Contact us</li>
					<li>About us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
		</div>
	);
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);