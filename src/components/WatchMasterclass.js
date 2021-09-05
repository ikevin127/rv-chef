import React, { useRef, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import ShakaPlayer from "shaka-player-react";
import axios from "axios";
import masterclass from "../img/masterclass.png";
import loadgif from "../img/loading.gif";
import thumb1 from "../img/thumb1.jpg";
// import thumb2 from "../img/thumb2.jpg";
// import thumb3 from "../img/thumb3.jpg";
// import thumb4 from "../img/thumb4.jpg";
// import thumb5 from "../img/thumb5.jpg";
import { ReactComponent as UP1 } from "../img/svg/top2.svg";
import { ReactComponent as BT1 } from "../img/svg/bottom2.svg";

const LOCAL = "http://localhost:6005";
const STREAMS = [
	{
		name: "Angel One MPEG-DASH",
		src: "http://localhost/hls/h264.mpd",
	},
	{
		name: "Big Buck Bunny HLS",
		src: "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8",
	},
];

export default function WatchMasterclass() {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const { id } = useParams();
	const [resOK, setRes] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const [vid1Loading, setVid1Loading] = React.useState(true);
	// const [vid2Loading, setVid2Loading] = React.useState(true);

	useEffect(() => {
		const source = axios.CancelToken.source();
		window.getShakaInst = () => ref1.current;
		window.getShakaInst = () => ref2.current;

		if (!resOK) {
			auth(source);
		}

		return () => {
			source.cancel();
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resOK]);

	const stoppedLoading1 = () => setVid1Loading(false);
	// const stoppedLoading2 = () => setVid2Loading(false);

	const auth = async (cancel) =>
		await axios(
			`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/${id}`,
			{
				method: "GET",
				cancelToken: cancel.token,
			}
		).then((res) => {
			setLoading(false);
			res.data.status === "authorized" && setRes(true);
		});

	return (
		<div className="master-container">
			{loading ? (
				<div className="lds-spinner">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			) : !resOK ? (
				<div className="text-container">
					<h1>NEAUTORIZAT</h1>
					<NavLink to="/masterclass" className="coming-soon">
						Acces Masterclass
					</NavLink>
				</div>
			) : (
				<div className="video-container">
					<UP1 className="position-absolute w-100" />
					<div className="masterclass-design">
						<img
							src={masterclass}
							width="1725"
							height="900"
							alt="Masterclass design"
						/>
					</div>
					<div className="container">
						<h3>Masterclass by Raul Vidican</h3>
						<p>Roca Brună, Păuliş</p>
						<ShakaPlayer
							poster={vid1Loading ? loadgif : thumb1}
							onCanPlay={stoppedLoading1}
							src={STREAMS[0].src}
							ref={ref1}
						/>
					</div>
					{/* <div className="container">
						<h3>Supă cremă de dovleac</h3>
						<p>Roca Brună, Păuliş</p>
						<ShakaPlayer
							poster={vid2Loading ? loadgif : thumb2}
							onCanPlay={stoppedLoading2}
							src={STREAMS[1].src}
							ref={ref1}
						/>
					</div> */}
					<BT1 className="position-relative fixed-bottom w-100" />
					<div className="masterclass-footer">
						<p>Copyright &copy; {new Date().getFullYear()} | #ChefRaulVidican</p>
					</div>
				</div>
			)}
		</div>
	);
}
