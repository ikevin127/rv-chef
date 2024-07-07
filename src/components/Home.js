import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Portfolios & Modals
import {
	ArtCafe,
	AtraPraova,
	CaeliaMamaia,
	RocaBruna,
	NukaCluj,
	VinSibiu,
} from "./Portfolio";
import { RocaBrunaModal, ReviewsCarousel, HomeCarousel } from "./Carousel";

/* Bootstrap & FontAwesome */
import { 
	Button,
	Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faMapMarkerAlt,
	faBars,
	faTimes,
	faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

// Parallax
import { Parallax } from "react-parallax";

// React Transition
import { CSSTransition } from "react-transition-group";

// Side menu
import { slide as Menu } from "react-burger-menu";

// Array & Images
import arr from "../array.json";
import yt from "../yt.json";
import { ReactComponent as UP1 } from "../svg/top1.svg";
import { ReactComponent as BT1 } from "../svg/bottom1.svg";
import { ReactComponent as UP2 } from "../svg/top2.svg";
import { ReactComponent as BT2 } from "../svg/bottom2.svg";
import { ReactComponent as UP3 } from "../svg/top3.svg";
import { ReactComponent as BT3 } from "../svg/bottom3.svg";
import { ReactComponent as FT } from "../svg/footer.svg";
import { addMediaPrefix } from "../utils";

export default function Home() {
	// State
	const [isTop, setIsTop] = useState(false);
	const [rocaModal, setRocaModal] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const [art, setArt] = useState(false);
	const [atra, setAtra] = useState(false);
	const [caelia, setCaelia] = useState(false);
	const [roca, setRoca] = useState(false);
	const [nuka, setNuka] = useState(false);
	const [sibiu, setSibiu] = useState(false);

	// Refs
	const homeRef = useRef();
	const chefRef = useRef();
	const cookRef = useRef();
	const pachetRef = useRef();
	const portfolioRef = useRef();
	const recenziiRef = useRef();
	const contactRef = useRef();

	useEffect(() => {
		document.addEventListener(
			"scroll",
			(e) => {
				if (window.scrollY > 400) {
					setIsTop(true);
				} else {
					setIsTop(false);
				}
				return () => {
					document.removeEventListener("scroll");
				};
			},
			[]
		);
	}, []);

	useEffect(() => {
		if (openNav) {
			document.getElementById("html").style.overflow = "hidden";
		} else {
			document.getElementById("html").style.overflow = "initial";
		}
	}, [openNav]);

	const toggleMenu = () => {
		setOpenNav(!openNav);
	};

	const handleStateChange = (state) => {
		setOpenNav(state.isOpen);
	};

	const portFunc = (id) => {
		switch (id) {
			case 6:
				return setSibiu(true);
			case 5:
				return setNuka(true);
			case 4:
				return setRoca(true);
			case 3:
				return setCaelia(true);
			case 2:
				return setAtra(true);
			case 1:
				return setArt(true);
			default:
				return null;
		}
	};

	const logo = addMediaPrefix('rv/img/rv.png');
	const currentYear = new Date().getFullYear();

	return (
		<>
			<CSSTransition in={isTop} timeout={1500} classNames="up" unmountOnExit>
				<div
					onClick={() => window.scrollTo(0, homeRef.current.offsetTop)}
					className="scroll-up"
				>
					<FontAwesomeIcon aria-hidden="false" icon={faAngleDoubleUp} />
				</div>
			</CSSTransition>
			<Menu
				isOpen={openNav}
				onStateChange={(state) => handleStateChange(state)}
				right
				disableAutoFocus
				customBurgerIcon={false}
				pageWrapId={"page-wrapper"}
				outerContainerId={"root"}
			>
				<div className="side-nav">
					<div className="logo-area">
						<div className="close-btn">
							<FontAwesomeIcon
								onClick={toggleMenu}
								style={{
									cursor: "pointer",
									margin: "1rem",
									fontSize: "1.5rem",
								}}
								icon={faTimes}
								aria-hidden="false"
							/>
						</div>
						<NavLink to="/">
							<img width="407" height="267" src={logo} alt="Vidican Raul Logo" />
						</NavLink>
					</div>
					<div id="span-line">
						<span />
					</div>
					<div className="side-menu">
						<div className="nav-list">
							<span
								onClick={() => {
									toggleMenu();
									window.scrollTo(0, chefRef.current.offsetTop);
								}}
								className="btn-about"
							>
								Chef
							</span>
							<span
								onClick={() => {
									toggleMenu();
									window.scrollTo(0, cookRef.current.offsetTop);
								}}
								className="btn-recipes"
							>
								Găteşte
							</span>
							<span
								onClick={() => {
									toggleMenu();
									window.scrollTo(0, portfolioRef.current.offsetTop);
								}}
								className="btn-recipes"
							>
								Portofoliu
							</span>
							<span
								onClick={() => {
									toggleMenu();
									window.scrollTo(0, recenziiRef.current.offsetTop);
								}}
								className="btn-menu"
							>
								Recenzii
							</span>
							<span
								onClick={() => {
									toggleMenu();
									window.scrollTo(0, contactRef.current.offsetTop);
								}}
								className="btn-contact"
							>
								Contact
							</span>
							<span
								onClick={() => window.scrollTo(0, pachetRef.current.offsetTop)}
								className="btn-contact"
							>
								Oferta LaPachet
							</span>
						</div>
					</div>
					<div id="span-line2">
						<span />
					</div>
					<div className="side-footer">
						<div className="footer-data">
							<p id="copy">Copyright &copy; {currentYear} | #ChefRaulVidican</p>
						</div>
					</div>
				</div>
			</Menu>
			<ArtCafe id="modal-zindex" show={art} onHide={() => setArt(false)} />
			<CaeliaMamaia
				id="modal-zindex"
				show={caelia}
				onHide={() => setCaelia(false)}
			/>
			<RocaBruna id="modal-zindex" show={roca} onHide={() => setRoca(false)} />
			<NukaCluj id="modal-zindex" show={nuka} onHide={() => setNuka(false)} />
			<AtraPraova id="modal-zindex" show={atra} onHide={() => setAtra(false)} />
			<VinSibiu id="modal-zindex" show={sibiu} onHide={() => setSibiu(false)} />
			<RocaBrunaModal
				id="modal-zindex"
				show={rocaModal}
				onHide={() => setRocaModal(false)}
			/>
			<div id="page-wrapper">
				<span ref={homeRef} />
				<div className="main-nav">
					<div className="logo-area">
						<NavLink to="/">
							<img width="407" height="267" src={logo} alt="Vidican Raul Logo" />
						</NavLink>
					</div>
					<div className="main-menu">
						<div className="nav-list">
							<span
								onClick={() => window.scrollTo(0, chefRef.current.offsetTop)}
								className="btn-about"
							>
								Chef
							</span>
							<span
								onClick={() => {
									window.scrollTo(0, cookRef.current.offsetTop);
								}}
								className="btn-recipes"
							>
								Găteşte
							</span>
							<span
								onClick={() => window.scrollTo(0, portfolioRef.current.offsetTop)}
								className="btn-recipes"
							>
								Portofoliu
							</span>
							<span
								onClick={() => window.scrollTo(0, recenziiRef.current.offsetTop)}
								className="btn-menu"
							>
								Recenzii
							</span>
							<span
								onClick={() => window.scrollTo(0, contactRef.current.offsetTop)}
								className="btn-contact"
							>
								Contact
							</span>
							<span
								onClick={() => window.scrollTo(0, pachetRef.current.offsetTop)}
								className="btn-contact"
							>
								Oferta LaPachet
							</span>
						</div>
						<FontAwesomeIcon
							aria-hidden="false"
							onClick={() => setOpenNav(true)}
							icon={faBars}
						/>
					</div>
				</div>
				<div className="home-wrapper">
					<div className="home-page">
						<HomeCarousel />
						<span ref={chefRef} />
						<div className="about-text">
							<div className="title-sep">
								<h1 id="meet2">Chef</h1>
							</div>
							<p id="text">
								Bucătar şef la Rădăcini, Raul Vidican a lucrat câțiva ani în
								restaurante din Germania, perioadă în care a ajuns să se califice în
								semifinalele regionale ale competiției S. Pellegrino Young Chef 2018,
								concurând pentru regiunea Germania - Austria. Reîntors în țară, a
								colaborat cu mai multe restaurante din zona Transilvaniei, pentru ca
								anul acesta să îşi deschidă propriul restaurant{" "}
								<a
									style={{
										cursor: 'pointer',
									}}
									title="Rădăcini by Raul Vidican"
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.facebook.com/radacinibyraulvidican"
								>
									<label>Rădăcini by Raul Vidican</label>
								</a>
								.
							</p>
						</div>
					</div>
					<Parallax className="parallax2" bgImage={addMediaPrefix('rv/img/parallax/img4.jpg')} strength={200}>
						<UP1 className="position-absolute w-100" />
						<div id="img1" />
						<BT1 className="position-absolute fixed-bottom w-100" />
					</Parallax>
					<div ref={cookRef} className="title-sep">
						<h1 id="meet">Găteşte cu Chef</h1>
					</div>
					<div className="posts">
						{yt.items.slice(0, 4).map((obj) => (
							<iframe
								data-aos="fade"
								key={obj.etag}
								title="YouTube"
								className="youtube-video"
								src={`https://www.youtube.com/embed/${obj.id.videoId}`}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						))}
					</div>
					<div ref={pachetRef} className="title-sep">
						<h1 id="pachet">La Pachet</h1>
					</div>
					<div style={{
						background: 'white',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: '2rem',
					}}>
						<div style={{
							background: 'white',
							width: '80vw',
						}}>
							<img 
								width="100%"
								height="100%"
								src="https://dlc4jqsejiyjs.cloudfront.net/meniu_vidican_site_compressed_page-0001.jpg"
								alt="Oferta LaPachet"/>
						</div>
					</div>
					<Parallax className="parallax2" bgImage={addMediaPrefix('rv/img/parallax/img1.jpg')} strength={200}>
						<UP2 className="position-absolute w-100" />
						<div id="img2" />
						<BT2 className="position-absolute fixed-bottom w-100" />
					</Parallax>
					<div ref={portfolioRef} className="title-sep">
						<h1 id="meet">Portofoliu</h1>
					</div>
					<div className="posts">
						{arr.portfolios.map((obj) => (
							<Card data-aos="fade" key={obj.id}>
								<Card.Img
									onClick={() => portFunc(obj.id)}
									variant="top"
									src={addMediaPrefix(obj.asset)}
									alt={obj.caption}
									width="400"
									height="400"
								/>
								<Card.Body>
									<Card.Title>{obj.title}</Card.Title>
									<Card.Subtitle className="mb-2 mt-2 text-muted">
										<FontAwesomeIcon aria-hidden="false" icon={faMapMarkerAlt} />{" "}
										{obj.location}
									</Card.Subtitle>
									<Card.Text>{obj.text}</Card.Text>
									<Button onClick={() => portFunc(obj.id)} variant="outline-dark">
										Galerie
									</Button>
								</Card.Body>
							</Card>
						))}
					</div>
					<span ref={recenziiRef} />
					<Parallax className="parallax22" bgImage={addMediaPrefix('rv/img/parallax/5.jpg')} strength={400}>
						<UP3 className="position-absolute w-100" />
						<div id="img3">
							<div className="title-sep2">
								<h1 id="meet">Recenzii</h1>
							</div>
							<div className="reviews-page">
								<ReviewsCarousel />
							</div>
						</div>
						<BT3 className="position-absolute fixed-bottom w-100" />
					</Parallax>
					<span id="contact-ref" ref={contactRef} />
					<div className="title-sep">
						<h1 id="meet">Contact</h1>
					</div>
					<div className="contact-form">
						<h1>La serviciul dumneavoastră pentru evenimente și consultanță</h1>
						<p>
							<b>Tel</b>: <a href="tel:+40751988273">0751 988 273</a>
						</p>
						{/* <Form onSubmit={formik.handleSubmit}>
							<Form.Group controlId="ControlName1">
								<Form.Label>Nume</Form.Label>
								<Form.Control
									{...formik.getFieldProps("name")}
									type="text"
									placeholder="Numele dvs."
								/>
								{formik.touched.name && formik.errors.name ? (
									<span className="text-error">{formik.errors.name}</span>
								) : null}
							</Form.Group>
							<Form.Group controlId="ControlNumber1">
								<Form.Label>Telefon</Form.Label>
								<Form.Control
									{...formik.getFieldProps("phone")}
									type="tel"
									placeholder="07xx xxx xxx"
								/>
								{formik.touched.phone && formik.errors.phone ? (
									<span className="text-error">{formik.errors.phone}</span>
								) : null}
							</Form.Group>
							<Form.Group controlId="ControlTextarea1">
								<Form.Label>Mesaj</Form.Label>
								<Form.Control
									{...formik.getFieldProps("message")}
									as="textarea"
									rows="3"
									placeholder="Mesajul dvs."
								/>
								{formik.touched.message && formik.errors.message ? (
									<span className="text-error">{formik.errors.message}</span>
								) : null}
							</Form.Group>
							{isSuccess ? (
								<Alert variant={"success"}>Mesajul a fost trimis !</Alert>
							) : null}
							{isError ? (
								<Alert variant={"danger"}>Mesajul nu putut fi trimis.</Alert>
							) : null}
							{isLoading ? (
								<Spinner size="lg" animation="border" />
							) : (
								<Button disabled={isLoading} variant="outline-dark" type="submit">
									Trimite
								</Button>
							)}
						</Form> */}
						<FT className="position-relative fixed-bottom w-100" />
					</div>

					<div className="footer">
						<div className="sm-icons">
							<a
								title="Pagină Instagram"
								id="ig"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/raul_vidican"
							>
								<FontAwesomeIcon aria-hidden="false" icon={faInstagram} />
								<label>Instagram</label>
							</a>
							<a
								title="Canal YouTube"
								id="yt"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.youtube.com/user/ZbeengBeeef"
							>
								<FontAwesomeIcon aria-hidden="false" icon={faYoutube} />
								<label>YouTube</label>
							</a>
							<a
								title="Pagină Facebook"
								id="fb"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.facebook.com/vidicanraul1"
							>
								<FontAwesomeIcon aria-hidden="false" icon={faFacebook} />
								<label>Facebook</label>
							</a>
						</div>
						<div className="footer-sep">
							<hr />
						</div>
						<div className="footer-data">
							<p id="copy">Copyright &copy; {currentYear} | #ChefRaulVidican</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
