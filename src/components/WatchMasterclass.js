import React from "react";
// import shaka from "shaka-player";
import thumb3 from "../img/thumb3.jpg";
// import v3 from "../img/v3/output.mpd";
class WatchMasterclass extends React.PureComponent {
	constructor(props) {
		super(props);
		this.videoComponent = React.createRef();
		this.onErrorEvent = this.onErrorEvent.bind(this);
		this.onError = this.onError.bind(this);
	}

	onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		this.onError(event.detail);
	}

	onError(error) {
		// Log the error.
		console.log("Error code", error.code, "object", error);
	}

	// componentDidMount() {
	// 	var manifestUri =
	// 		"https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd";
	// 	const video = this.videoComponent.current;
	// 	var player = new shaka.Player(video);

	// 	// Listen for error events.
	// 	player.addEventListener("error", this.onErrorEvent);
	// 	// Try to load a manifest.
	// 	// This is an asynchronous process.
	// 	player
	// 		.load(v3)
	// 		.then(function () {
	// 			// This runs if the asynchronous load is successful.
	// 			console.log("The video has now been loaded!");
	// 		})
	// 		.catch(this.onError); // onError is executed if the asynchronous load fails.
	// }

	render() {
		return (
			<video
				className="video-player-rv"
				ref={this.videoComponent}
				poster={thumb3}
				controls
			/>
		);
	}
}

export default WatchMasterclass;

// import React, { useState, useEffect } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { ReactComponent as UP1 } from "../img/svg/top2.svg";
// import { ReactComponent as BT1 } from "../img/svg/bottom2.svg";
// import masterclass from "../img/masterclass.png";
// import loadgif from "../img/loading.gif";
// import thumb1 from "../img/thumb1.jpg";
// import thumb2 from "../img/thumb2.jpg";
// import thumb3 from "../img/thumb3.jpg";
// import thumb4 from "../img/thumb4.jpg";
// import thumb5 from "../img/thumb5.jpg";
// import axios from "axios";

// export default function WatchMasterclass() {
// 	const { id } = useParams();
// 	const LOCAL = "http://localhost:6005";
// 	const [blob1, setBlob1] = useState(null);
// 	const [blob2, setBlob2] = useState(null);
// 	const [blob3, setBlob3] = useState(null);
// 	const [blob4, setBlob4] = useState(null);
// 	const [blob5, setBlob5] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [vid1Loading, setVid1Loading] = useState(true);
// 	const [vid2Loading, setVid2Loading] = useState(true);
// 	const [vid3Loading, setVid3Loading] = useState(true);
// 	const [vid4Loading, setVid4Loading] = useState(true);
// 	const [vid5Loading, setVid5Loading] = useState(true);
// 	const [resOK, setRes] = useState(false);

// 	useEffect(() => {
// 		const source1 = axios.CancelToken.source();
// 		const source2 = axios.CancelToken.source();
// 		const source3 = axios.CancelToken.source();
// 		const source4 = axios.CancelToken.source();
// 		const source5 = axios.CancelToken.source();
// 		const source6 = axios.CancelToken.source();

// 		if (resOK) {
// 			getVideoBlob(
// 				process.env.REACT_APP_RVIDEO,
// 				LOCAL,
// 				id,
// 				1,
// 				blob1,
// 				setBlob1,
// 				source1
// 			);
// 			getVideoBlob(
// 				process.env.REACT_APP_RVIDEO,
// 				LOCAL,
// 				id,
// 				2,
// 				blob2,
// 				setBlob2,
// 				source2
// 			);
// 			getVideoBlob(
// 				process.env.REACT_APP_RVIDEO,
// 				LOCAL,
// 				id,
// 				3,
// 				blob3,
// 				setBlob3,
// 				source3
// 			);
// 			getVideoBlob(
// 				process.env.REACT_APP_RVIDEO,
// 				LOCAL,
// 				id,
// 				4,
// 				blob4,
// 				setBlob4,
// 				source4
// 			);
// 			getVideoBlob(
// 				process.env.REACT_APP_RVIDEO,
// 				LOCAL,
// 				id,
// 				5,
// 				blob5,
// 				setBlob5,
// 				source5
// 			);
// 		} else {
// 			auth(source6);
// 		}

// 		return () => {
// 			source1.cancel();
// 			source2.cancel();
// 			source3.cancel();
// 			source4.cancel();
// 			source5.cancel();
// 			source6.cancel();
// 		};
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [resOK]);

// 	const auth = async (cancel) => {
// 		await axios(`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/${id}`, {
// 			method: "GET",
// 			cancelToken: cancel.token,
// 		}).then((res) => {
// 			setLoading(false);
// 			res.data.status === "authorized" && setRes(true);
// 		});
// 	};

// 	const getVideoBlob = async (live, local, id, videoId, state, setState, cancel) => {
// 		await axios(`${live || local}/rvideo/playback/${videoId}/${id}`, {
// 			method: "GET",
// 			responseType: "blob",
// 			cancelToken: cancel.token,
// 		}).then((res) => {
// 			setState(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
// 			setTimeout(() => {
// 				URL.revokeObjectURL(state);
// 			}, 1000);
// 		});
// 	};

// 	const v1StopLoad = () => {
// 		setVid1Loading(false);
// 	};

// 	const v2StopLoad = () => {
// 		setVid2Loading(false);
// 	};

// 	const v3StopLoad = () => {
// 		setVid3Loading(false);
// 	};

// 	const v4StopLoad = () => {
// 		setVid4Loading(false);
// 	};

// 	const v5StopLoad = () => {
// 		setVid5Loading(false);
// 	};

// 	return (
// 		<div className="master-container">
// 			{loading ? (
// 				<div className="lds-spinner">
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 					<div />
// 				</div>
// 			) : !resOK ? (
// 				<div className="text-container">
// 					<h1>NEAUTORIZAT</h1>
// 					<NavLink to="/masterclass" className="coming-soon">
// 						Acces Masterclass
// 					</NavLink>
// 				</div>
// 			) : (
// 				<div className="video-container">
// 					<UP1 className="position-absolute w-100" />
// 					<div className="masterclass-design">
// 						<img
// 							src={masterclass}
// 							width="1725"
// 							height="900"
// 							alt="Masterclass design"
// 						/>
// 					</div>
// 					<div className="container">
// 						<h3>Masterclass by Raul Vidican</h3>
// 						<p>Roca Brună, Păuliş</p>
// 						<video
// 							onCanPlay={v1StopLoad}
// 							poster={vid1Loading ? loadgif : thumb1}
// 							src={blob1}
// 							className="video-player-rv"
// 							controls
// 						/>
// 					</div>
// 					<div className="container">
// 						<h3>Supă cremă de dovleac</h3>
// 						<p>Roca Brună, Păuliş</p>
// 						<video
// 							onCanPlay={v2StopLoad}
// 							poster={vid2Loading ? loadgif : thumb2}
// 							src={blob2}
// 							className="video-player-rv"
// 							controls
// 						/>
// 					</div>
// 					<div className="container">
// 						<h3>Risotto cu ciuperci</h3>
// 						<p>Roca Brună, Păuliş</p>
// 						<video
// 							onCanPlay={v3StopLoad}
// 							poster={vid3Loading ? loadgif : thumb3}
// 							src={blob3}
// 							className="video-player-rv"
// 							controls
// 						/>
// 					</div>
// 					<div className="container">
// 						<h3>Paste cu creveți</h3>
// 						<p>Roca Brună, Păuliş</p>
// 						<video
// 							onCanPlay={v4StopLoad}
// 							poster={vid4Loading ? loadgif : thumb4}
// 							src={blob4}
// 							className="video-player-rv"
// 							controls
// 						/>
// 					</div>
// 					<div className="container">
// 						<h3>Vită cu salată de roșii cherry, rucola și parmezan</h3>
// 						<p>Roca Brună, Păuliş</p>
// 						<video
// 							onCanPlay={v5StopLoad}
// 							poster={vid5Loading ? loadgif : thumb5}
// 							src={blob5}
// 							className="video-player-rv"
// 							controls
// 						/>
// 					</div>
// 					<BT1 className="position-relative fixed-bottom w-100" />
// 					<div className="masterclass-footer">
// 						<p>Copyright &copy; {new Date().getFullYear()} | #ChefRaulVidican</p>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// }
