import React, { useEffect } from "react";
// import Stripe from './stripe/Stripe';

export default function Masterclass() {
	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		// <Stripe/>
		<div className="master-container">
			<div className="text-container">
				<h1>MASTERCLASS</h1>
				<p className="coming-soon">Coming soon...</p>
			</div>
		</div>
	);
}
