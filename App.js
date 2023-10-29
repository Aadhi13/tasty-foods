import React from "react";
import { createRoot } from "react-dom/client";

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

const AppLayout = () => {
	return (
		<div className="app">

		</div>
	);
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);