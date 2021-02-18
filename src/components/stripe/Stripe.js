import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../stripe/CheckoutForm'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST, {locale: 'ro'});
const Stripe = () => {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
};
export default Stripe;
