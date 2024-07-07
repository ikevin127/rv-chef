import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stepper from '../stripe/Stepper'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE, {locale: 'ro'});
const Stripe = () => {
	return (
		<Elements stripe={stripePromise}>
			<Stepper />
		</Elements>
	);
};
export default Stripe;
