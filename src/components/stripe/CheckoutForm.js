import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Form, Button, Spinner } from "react-bootstrap";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useResponsiveFontSize from "../../useResponsiveFontSize";
import { v4 as uuidv4 } from "uuid";
// import Stepper from './Stepper';

const useOptions = () => {
	const fontSize = useResponsiveFontSize();
	const options = useMemo(
		() => ({
			hidePostalCode: true,
			style: {
				base: {
					color: "#666",
					fontSize,
					fontFamily: "Alata, Helvetica",
					fontSmoothing: "antialiased",
					":-webkit-autofill": {
						color: "#fff",
					},
					"::placeholder": {
						color: "#999",
					},
				},
				invalid: {
					iconColor: "#FFC7EE",
					color: "#9e2146",
				},
			},
		}),
		[fontSize]
	);

	return options;
};

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const options = useOptions();
	const LOCAL = "http://localhost:6005";
	const [loading, setLoad] = React.useState(false);
	const [loading2, setLoad2] = React.useState(false);
	// const [error, setError] = React.useState(false);
	// const [success, setSuccess] = React.useState(false);
	const [first, setFirst] = React.useState("");
	const [last, setLast] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [step2, setStep2] = React.useState(false);
	// const [cardElComplete, setCardElComplete] = React.useState(false);
	// const [cardElError, setCardElError] = React.useState('');
	const [clientSecret, setClientSecret] = React.useState("");
	const history = useHistory();

	// React.useEffect(() => {
	// 	setTimeout(() => {
	// 		history.push("/success");
	// 	}, 2000);
	// 	setTimeout(() => {
	// 		history.push("/failed");
	// 	}, 4000);
	// }, [])

	const handleCardPayment = async () => {
		const card = elements.getElement(CardElement);
		setLoad2(true);
		await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: first + " " + last,
						email: email,
					},
				},
			})
			.then(async (res) => {
				console.log(res);
				console.log(res.paymentIntent.status);
				if (res.paymentIntent.status === 'succeeded') {
					setLoad2(false);
					await axios
						.post(`${process.env.REACT_APP_RVIDEO || LOCAL}/email/rv-payment`, {
							first: first,
							last: last,
							token: uuidv4(),
							email: email,
						})
						.then(() => {
							history.push("/success");
						})
						.catch(() => {
							history.push("/failed");
						});
				}
			})
			.catch((err) => {
				console.log(err);
				setLoad2(false);
			});
	}

	const formik = useFormik({
		initialValues: {
			first: "",
			last: "",
			email: "",
		},
		validationSchema: Yup.object({
			first: Yup.string().min(1).required("Prenumele este necesar"),
			last: Yup.string().min(1).required("Numele este necesar"),
			email: Yup.string()
				.email("Adresa de e-mail nu este validă")
				.required("Adresa de e-mail este necesară pentru accesul la Masterclass"),
		}),
		onSubmit: async (
			values,
			{ setSubmitting, setErrors, setStatus, resetForm }
		) => {
			setFirst(values.first);
			setLast(values.last);
			setEmail(values.email);
			setLoad(true);
			await axios
				.post(`${process.env.REACT_APP_RVIDEO || LOCAL}/stripe/paymentIntentRV`, {
					first: values.first,
					last: values.last,
					email: values.email,
				})
				.then((res) => {
					console.log(res.data.client_secret);
					setClientSecret(res.data.client_secret);
					setLoad(false);
					setStep2(true);
					// setLoad(false);
					// setTimeout(() => {
					// 	resetForm({});
					// }, 1000);

					// const payload = await stripe.createPaymentMethod({
					// 	type: "card",
					// 	card: elements.getElement(CardNumberElement),
					// 	billing_details: {
					// 		name: values.first+" "+values.last,
					// 		email: values.email,
					// 	},
					// });

					// if (res.data.status === "true") {
					// 	resetForm({});
					// 	setLoad(false);
					// 	setSuccess(true);
					// 	setTimeout(() => {
					// 		setSuccess(false);
					// 	}, 4000);
					// } else {
					// 	resetForm({});
					// 	setLoad(false);
					// 	setError(true);
					// 	setTimeout(() => {
					// 		setError(false);
					// 	}, 4000);
					// }
				})
				.catch((err) => {
					console.log(err);
					setLoad(false);
					// setLoad(false);
					// setTimeout(() => {
					// 	resetForm({});
					// }, 1000);

					// setLoad(false);
					// resetForm({});
					// setTimeout(() => {
					// 	setError(false);
					// }, 4000);
				});
		},
	});

	return (
		<>
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
						<div className="error-container">
							{/* {error && <Alert variant="success">Plata efectuată cu succes!</Alert>}
						{success && <Alert variant="danger">Eroare procesare plată.</Alert>} */}
						</div>
					</Form.Group>
				</Form>
				<Button
					variant="outline-light"
					onClick={formik.handleSubmit}
					disabled={
						formik.values.first.length < 1 ||
						formik.errors.first ||
						formik.values.last.length < 1 ||
						formik.errors.last ||
						formik.values.email.length < 1 ||
						formik.errors.email ||
						loading
					}
				>
					{loading ? (
						<>
							<Spinner animation="border" size="sm" role="status" />
							<span style={{ marginLeft: 15 }}>Procesare...</span>
						</>
					) : (
						"Continuă"
					)}
				</Button>
			<br />
			<br />
			<br />
				<Form>
					<CardElement
						// onChange={(e) => {
						// 	if (!e.complete) {
						// 		setCardElComplete(false);
						// 		setCardElError("");
						// 	} else if (e.error !== undefined) {
						// 		setCardElComplete(true);
						// 		setCardElError(e.error.message);
						// 	} else setCardElComplete(false);
						// 	setCardElError("");
						// }}
						options={options}
					/>
					{/* <div className="error-container">
						{cardElError.length > 0 && (
							<span className="text-error">{cardElError}</span>
						)}
					</div> */}
				</Form>
				<Button
					variant="outline-light"
					onClick={() => setStep2(false)}
					disabled={loading2}
				>
					Înapoi
				</Button>
				<Button
					variant="outline-light"
					onClick={handleCardPayment}
					disabled={loading2}
				>
					{loading2 ? (
						<>
							<Spinner animation="border" size="sm" role="status" />
							<span style={{ marginLeft: 15 }}>Procesare...</span>
						</>
					) : (
						"Continuă"
					)}
				</Button>
		</>
		// <Stepper />
	);
};

export default CheckoutForm;
