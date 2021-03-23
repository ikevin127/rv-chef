// import React, { useMemo } from "react";
// import { useHistory } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Form, Button, Spinner } from "react-bootstrap";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import useResponsiveFontSize from "../../useResponsiveFontSize";
// import { v4 as uuidv4 } from "uuid";
// import Stepper from './Stepper';

// const useOptions = () => {
// 	const fontSize = useResponsiveFontSize();
// 	const options = useMemo(
// 		() => ({
// 			hidePostalCode: true,
// 			style: {
// 				base: {
// 					color: "#666",
// 					fontSize,
// 					fontFamily: "Alata, Helvetica",
// 					fontSmoothing: "antialiased",
// 					":-webkit-autofill": {
// 						color: "#fff",
// 					},
// 					"::placeholder": {
// 						color: "#999",
// 					},
// 				},
// 				invalid: {
// 					iconColor: "#FFC7EE",
// 					color: "#9e2146",
// 				},
// 			},
// 		}),
// 		[fontSize]
// 	);

// 	return options;
// };

// const CheckoutForm = () => {
// 	const stripe = useStripe();
// 	const elements = useElements();
// 	const options = useOptions();
// 	const [loading, setLoad] = React.useState(false);
// 	const [loading2, setLoad2] = React.useState(false);
// 	// const [error, setError] = React.useState(false);
// 	// const [success, setSuccess] = React.useState(false);
// 	const [first, setFirst] = React.useState("");
// 	const [last, setLast] = React.useState("");
// 	const [email, setEmail] = React.useState("");
// 	const [step2, setStep2] = React.useState(false);
// 	// const [cardElComplete, setCardElComplete] = React.useState(false);
// 	// const [cardElError, setCardElError] = React.useState('');
// 	const [clientSecret, setClientSecret] = React.useState("");
// 	const history = useHistory();

// 	// React.useEffect(() => {
// 	// 	setTimeout(() => {
// 	// 		history.push("/success");
// 	// 	}, 2000);
// 	// 	setTimeout(() => {
// 	// 		history.push("/failed");
// 	// 	}, 4000);
// 	// }, [])

// 	const handleCardPayment = async () => {
// 		const card = elements.getElement(CardElement);
// 		setLoad2(true);
// 		await stripe
// 			.confirmCardPayment(clientSecret, {
// 				payment_method: {
// 					card: card,
// 					billing_details: {
// 						name: first + " " + last,
// 						email: email,
// 					},
// 				},
// 			})
// 			.then(async (res) => {
// 				console.log(res);
// 				console.log(res.paymentIntent.status);
// 				if (res.paymentIntent.status === 'succeeded') {
// 					setLoad2(false);
// 					await axios
// 						.post(process.env.REACT_APP_STRIPE_EMAIL, {
// 							first: first,
// 							last: last,
// 							token: uuidv4(),
// 							email: email,
// 						})
// 						.then(() => {
// 							history.push("/success");
// 						})
// 						.catch(() => {
// 							history.push("/failed");
// 						});
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				setLoad2(false);
// 			});
// 	}

// 	const formik = useFormik({
// 		initialValues: {
// 			first: "",
// 			last: "",
// 			email: "",
// 		},
// 		validationSchema: Yup.object({
// 			first: Yup.string().min(1).required("Prenumele este necesar"),
// 			last: Yup.string().min(1).required("Numele este necesar"),
// 			email: Yup.string()
// 				.email("Adresa de e-mail nu este validă")
// 				.required("Adresa de e-mail este necesară pentru accesul la Masterclass"),
// 		}),
// 		onSubmit: async (
// 			values,
// 			{ setSubmitting, setErrors, setStatus, resetForm }
// 		) => {
// 			setFirst(values.first);
// 			setLast(values.last);
// 			setEmail(values.email);
// 			setLoad(true);
// 			await axios
// 				.post(process.env.REACT_APP_STRIPE_INTENT, {
// 					first: values.first,
// 					last: values.last,
// 					email: values.email,
// 				})
// 				.then((res) => {
// 					console.log(res.data.client_secret);
// 					setClientSecret(res.data.client_secret);
// 					setLoad(false);
// 					setStep2(true);
// 					// setLoad(false);
// 					// setTimeout(() => {
// 					// 	resetForm({});
// 					// }, 1000);

// 					// const payload = await stripe.createPaymentMethod({
// 					// 	type: "card",
// 					// 	card: elements.getElement(CardNumberElement),
// 					// 	billing_details: {
// 					// 		name: values.first+" "+values.last,
// 					// 		email: values.email,
// 					// 	},
// 					// });

// 					// if (res.data.status === "true") {
// 					// 	resetForm({});
// 					// 	setLoad(false);
// 					// 	setSuccess(true);
// 					// 	setTimeout(() => {
// 					// 		setSuccess(false);
// 					// 	}, 4000);
// 					// } else {
// 					// 	resetForm({});
// 					// 	setLoad(false);
// 					// 	setError(true);
// 					// 	setTimeout(() => {
// 					// 		setError(false);
// 					// 	}, 4000);
// 					// }
// 				})
// 				.catch((err) => {
// 					console.log(err);
// 					setLoad(false);
// 					// setLoad(false);
// 					// setTimeout(() => {
// 					// 	resetForm({});
// 					// }, 1000);

// 					// setLoad(false);
// 					// resetForm({});
// 					// setTimeout(() => {
// 					// 	setError(false);
// 					// }, 4000);
// 				});
// 		},
// 	});

// 	return (
// 		<Stepper />
// 	);
// };

// export default CheckoutForm;
