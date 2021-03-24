import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ReactComponent as UP1 } from "../img/svg/top2.svg";
import { ReactComponent as BT1 } from "../img/svg/bottom2.svg";
import masterclass from "../img/masterclass.png";
import axios from "axios";

export default function WatchMasterclass() {
	const { id } = useParams();
	const LOCAL = "http://localhost:6005";
	const [blob1, setBlob1] = useState(null);
	const [blob2, setBlob2] = useState(null);
	const [blob3, setBlob3] = useState(null);
	const [blob4, setBlob4] = useState(null);
	const [blob5, setBlob5] = useState(null);
	const [loading, setLoading] = useState(true);
	const [resOK, setRes] = useState(false);

	useEffect(() => {
		const source1 = axios.CancelToken.source();
		const source2 = axios.CancelToken.source();
		const source3 = axios.CancelToken.source();
		const source4 = axios.CancelToken.source();
		const source5 = axios.CancelToken.source();
		const source6 = axios.CancelToken.source();

		if (resOK) {
			getBlob1(source1);
			getBlob2(source2);
			getBlob3(source3);
			getBlob4(source4);
			getBlob5(source5);
		} else {
			getRes(source6);
		}

		return () => {
			source1.cancel();
			source2.cancel();
			source3.cancel();
			source4.cancel();
			source5.cancel();
			source6.cancel();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resOK]);

	const getRes = async (cancel) => {
		await axios(`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/${id}`, {
			method: "GET",
			cancelToken: cancel.token,
		}).then((res) => {
			setLoading(false);
			res.data.status === "authorized" && setRes(true);
		});
	};

	const getBlob1 = async (cancel) => {
		await axios(`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/1/${id}`, {
			method: "GET",
			responseType: "blob",
			cancelToken: cancel.token,
		}).then((res) => {
			setBlob1(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
			setTimeout(() => {
				URL.revokeObjectURL(blob1);
			}, 1000);
		});
	};

	const getBlob2 = async (cancel) => {
		await axios(`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/2/${id}`, {
			method: "GET",
			responseType: "blob",
			cancelToken: cancel.token,
		}).then((res) => {
			setBlob2(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
			setTimeout(() => {
				URL.revokeObjectURL(blob2);
			}, 1000);
		});
	};

	const getBlob3 = async (cancel) => {
		await axios(`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/3/${id}`, {
			method: "GET",
			responseType: "blob",
			cancelToken: cancel.token,
		}).then((res) => {
			setBlob3(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
			setTimeout(() => {
				URL.revokeObjectURL(blob3);
			}, 1000);
		});
	};

	const getBlob4 = async (cancel) => {
		await axios(`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/4/${id}`, {
			method: "GET",
			responseType: "blob",
			cancelToken: cancel.token,
		}).then((res) => {
			setBlob4(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
			setTimeout(() => {
				URL.revokeObjectURL(blob4);
			}, 1000);
		});
	};

	const getBlob5 = async (cancel) => {
		await axios(`${process.env.REACT_APP_RVIDEO || LOCAL}/rvideo/playback/5/${id}`, {
			method: "GET",
			responseType: "blob",
			cancelToken: cancel.token,
		}).then((res) => {
			setBlob5(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
			setTimeout(() => {
				URL.revokeObjectURL(blob5);
			}, 1000);
		});
	};

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
						<video src={blob1} className="video-player-rv" controls />
					</div>
					<div className="container">
						<h3>Supă cremă de dovleac</h3>
						<p>Roca Brună, Păuliş</p>
						<video src={blob2} className="video-player-rv" controls />
					</div>
					<div className="container">
						<h3>Risotto cu ciuperci</h3>
						<p>Roca Brună, Păuliş</p>
						<video src={blob3} className="video-player-rv" controls />
					</div>
					<div className="container">
						<h3>Paste cu creveți</h3>
						<p>Roca Brună, Păuliş</p>
						<video src={blob4} className="video-player-rv" controls />
					</div>
					<div className="container">
						<h3>Vită cu salată de roșii cherry, rucola și parmezan</h3>
						<p>Roca Brună, Păuliş</p>
						<video src={blob5} className="video-player-rv" controls />
					</div>
					<BT1 className="position-relative fixed-bottom w-100" />
					<div className="masterclass-footer">
						<p>Copyright &copy; {new Date().getFullYear()} | #ChefRaulVidican</p>
					</div>
				</div>
			)}
		</div>
	);
}
