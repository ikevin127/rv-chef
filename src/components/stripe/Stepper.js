import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import useResponsiveFontSize from "../../useResponsiveFontSize";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import PaymentIcon from "@material-ui/icons/Payment";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		"& $line": {
			backgroundImage:
				"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(130,130,130,1) 100%);",
		},
	},
	completed: {
		"& $line": {
			backgroundColor: "#000",
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: "#eaeaf0",
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
	root: {
		zIndex: 1,
		backgroundColor: "#ccc",
		color: "#FFF",
		width: 50,
		height: 50,
		display: "flex",
		borderRadius: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	active: {
		backgroundImage:
			"linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(75,75,75,1) 100%);",
		boxShadow: "0 4px 10px 0 rgba(0,0,0, 0.4)",
		color: "#FFF",
	},
	completed: {
		backgroundImage:
			"linear-gradient(-90deg, rgba(162,162,162,1) 0%, rgba(203,202,202,1) 100%);",
		color: "#333",
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	const icons = {
		1: (
			<ContactMailIcon />
		),
		2: (
			<PaymentIcon />
		),
		3: <DoneAllIcon />,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{icons[String(props.icon)]}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: '100vh',
	},
	btnContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return ["Date personale", "Plată", "Succes"];
}

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

export default function CustomizedSteppers() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

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
	// const [cardElComplete, setCardElComplete] = React.useState(false);
	// const [cardElError, setCardElError] = React.useState('');
	const [clientSecret, setClientSecret] = React.useState("");
	const history = useHistory();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};


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
					// setStep2(true);
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
				if (res.paymentIntent.status === "succeeded") {
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
	};

	return (
		<div className={classes.root}>
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<ColorlibConnector />}
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			{activeStep === 0 ? (
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
						variant="contained"
						color="primary"
						disabled={
							formik.values.first.length < 1 ||
							formik.errors.first ||
							formik.values.last.length < 1 ||
							formik.errors.last ||
							formik.values.email.length < 1 ||
							formik.errors.email ||
							loading
						}
						onClick={formik.handleSubmit}
						className={classes.button}
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
				</>
			) : null}
			{activeStep === 1 ? (
				<>
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
						variant="contained"
						color="primary"
						disabled={loading2}
						className={classes.button}
					>
						Înapoi
					</Button>
					<Button
						variant="contained"
						color="primary"
						disabled={loading2}
						onClick={handleCardPayment}
						className={classes.button}
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
			) : null}
			{activeStep === 2 ? <div>SUCCESS</div> : null}
			<div className={classes.btnContainer}>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed - you&apos;re finished
						</Typography>
						<Button
							variant="contained"
							color="primary"
							onClick={handleReset}
							className={classes.button}
						>
							Reset
						</Button>
					</div>
				) : (
					<div className="stepper-btn-container">
						<Button
							variant="contained"
							color="primary"
							disabled={activeStep === 0}
							onClick={handleBack}
							className={classes.button}
						>
							Back
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={handleNext}
							className={classes.button}
						>
							{activeStep === steps.length - 1 ? "Finish" : "Next"}
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
