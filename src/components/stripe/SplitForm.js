import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// Form validation
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Form, Button, Spinner } from "react-bootstrap";
// import useResponsiveFontSize from "../../useResponsiveFontSize";
import axios from 'axios'

// const useOptions = () => {
// 	const fontSize = useResponsiveFontSize();
// 	const options = useMemo(
// 		() => ({
// 			style: {
// 				base: {
// 					fontSize,
// 					color: "#424770",
// 					letterSpacing: "0.025em",
// 					fontFamily: "Source Code Pro, monospace",
// 					"::placeholder": {
// 						color: "#aab7c4",
// 					},
// 				},
// 				invalid: {
// 					color: "#9e2146",
// 				},
// 			},
// 		}),
// 		[fontSize]
// 	);

// 	return options;
// };
const CARD_ELEMENT_OPTIONS = {
	hidePostalCode: true,
	style: {
		base: {
			color: "#32325d",
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: "antialiased",
			fontSize: "16px",
			"::placeholder": {
				color: "#aab7c4",
			},
		},
		invalid: {
			color: "#fa755a",
			iconColor: "#fa755a",
		},
	},
};

const SplitForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	// const options = useOptions();

	// const handlePayment = async (values) => {

	// 	if (!stripe || !elements) {
	// 		return;
	// 	}

	// 	const payload = await stripe.createPaymentMethod({
	// 		type: "card",
	// 		card: elements.getElement(CardNumberElement),
	// 		billing_details: {
	// 			name: values.first+" "+values.last,
	// 			email: values.email,
	// 		},
	// 	});
	// 	console.log(payload);
	// };
	const [loading, setLoad] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [success, setSuccess] = React.useState(false);

	const stripeTokenHandler = async (data) => {
		// const response = await axios
		// 	.post("http://localhost:6005/stripe/paymentIntentRV", {
		// 		first: data.first,
		// 		last: data.last,
		// 		amount: data.amount,
		// 		currency: data.currency,
		// 		email: data.email,
		// 		token: data.token.id,
		// 	})
		// 	.then(async (res) => {
		// 		console.log(res.data);
		// 		if (res.data.status === 'succeeded') {
		// 			setLoad(false);
		// 			setSuccess(true);
		// 		} else {
		// 			setLoad(false);
		// 			setError(true);
		// 		}

		// 		// const payload = await stripe.createPaymentMethod({
		// 		// 	type: "card",
		// 		// 	card: elements.getElement(CardNumberElement),
		// 		// 	billing_details: {
		// 		// 		name: values.first+" "+values.last,
		// 		// 		email: values.email,
		// 		// 	},
		// 		// });

		// 		// if (res.data.status === "true") {
		// 		// 	resetForm({});
		// 		// 	setLoad(false);
		// 		// 	setSuccess(true);
		// 		// 	setTimeout(() => {
		// 		// 		setSuccess(false);
		// 		// 	}, 4000);
		// 		// } else {
		// 		// 	resetForm({});
		// 		// 	setLoad(false);
		// 		// 	setError(true);
		// 		// 	setTimeout(() => {
		// 		// 		setError(false);
		// 		// 	}, 4000);
		// 		// }
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		setLoad(false);
		// 		setError(true);
		// 		// setLoad(false);
		// 		// setTimeout(() => {
		// 		// 	resetForm({});
		// 		// }, 1000);

		// 		// setLoad(false);
		// 		// resetForm({});
		// 		// setTimeout(() => {
		// 		// 	setError(false);
		// 		// }, 4000);
		// 	});

		// Return and display the result of the charge.
		// return response.json();
	}

	const formik = useFormik({
		initialValues: {
			first: "",
			last: "",
			amount: 69,
			currency: "usd",
			email: "",
		},
		validationSchema: Yup.object({
			first: Yup.string().min(1).required("Prenumele este necesar"),
			last: Yup.string().min(1).required("Numele este necesar"),
			email: Yup.string()
				.email("Adresa de e-mail nu este validă")
				.required("Adresa de e-mail este necesară pentru accesul la Masterclass"),
		}),
		onSubmit: async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
			const card = elements.getElement(CardElement);
			const result = await stripe.createToken(card);
			let data = {
				first: values.first,
				last: values.last,
				amount: values.amount,
				currency: values.currency,
				email: values.email,
				token: result.token,
			};
			setLoad(true);
			if (result.error) {
				console.log(result.error.message);
				setLoad(false);
				setError(true);
			} else {
				stripeTokenHandler(data);
			}
			// axios
			// 	.post("https://inkthatquote.com/stripe/paymentIntentRV", {
			// 		first: values.first,
			// 		last: values.last,
			// 		amount: values.amount,
			// 		currency: values.currency,
			// 		email: values.email,
			// 	})
				// .then(async (res) => {
				// 	console.log(res.data);
				// 	setLoad(false);
				// 	setTimeout(() => {
				// 		resetForm({});	
				// 	}, 1000);
					
				// 	// const payload = await stripe.createPaymentMethod({
				// 	// 	type: "card",
				// 	// 	card: elements.getElement(CardNumberElement),
				// 	// 	billing_details: {
				// 	// 		name: values.first+" "+values.last,
				// 	// 		email: values.email,
				// 	// 	},
				// 	// });

				// 	// if (res.data.status === "true") {
				// 	// 	resetForm({});
				// 	// 	setLoad(false);
				// 	// 	setSuccess(true);
				// 	// 	setTimeout(() => {
				// 	// 		setSuccess(false);
				// 	// 	}, 4000);
				// 	// } else {
				// 	// 	resetForm({});
				// 	// 	setLoad(false);
				// 	// 	setError(true);
				// 	// 	setTimeout(() => {
				// 	// 		setError(false);
				// 	// 	}, 4000);
				// 	// }
				// })
				// .catch((err) => {
				// 	console.log(err);
				// 	setLoad(false);
				// 	setTimeout(() => {
				// 		resetForm({});
				// 	}, 1000);

				// 	// setLoad(false);
				// 	// resetForm({});
				// 	// setTimeout(() => {
				// 	// 	setError(false);
				// 	// }, 4000);
				// });
		},
	});

	return (
		<Form>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Prenume"
					{...formik.getFieldProps("first")}
				/>
				<div className="error-container">
					{formik.touched.first && formik.errors.first ? (
						<span className="text-error">{formik.errors.first}</span>
					) : null}
				</div>
				<Form.Control
					type="text"
					placeholder="Nume"
					{...formik.getFieldProps("last")}
				/>
				<div className="error-container">
					{formik.touched.last && formik.errors.last ? (
						<span className="text-error">{formik.errors.last}</span>
					) : null}
				</div>
				<Form.Control
					type="email"
					placeholder="Adresă email"
					{...formik.getFieldProps("email")}
				/>
				<div className="error-container">
					{formik.touched.email && formik.errors.email ? (
						<span className="text-error">{formik.errors.email}</span>
					) : null}
				</div>
				<CardElement options={CARD_ELEMENT_OPTIONS} />
				<div className="error-container">
					{error && <Alert variant="success">Plata efectuată cu succes!</Alert>}
					{success && <Alert variant="danger">Eroare procesare plată.</Alert>}
				</div>
				<Button
					variant="outline-light"
					onClick={formik.handleSubmit}
					disabled={!stripe || !elements || loading}
				>
					{loading ? (
						<>
							<Spinner animation="border" size="sm" role="status" />
							<span style={{ marginLeft: 15 }}>Procesare...</span>
						</>
					) : (
						"Plăteşte"
					)}
				</Button>
			</Form.Group>
		</Form>
	);
};

export default SplitForm;
