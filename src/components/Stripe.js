import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//import CardForm from "./stripe/CardForm";
import SplitForm from "./stripe/SplitForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST);
const Stripe = () => {
	return (
		<Elements stripe={stripePromise}>
			<SplitForm/>
		</Elements>
	);
};
export default Stripe;
