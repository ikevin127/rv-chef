import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const domain = "http://localhost:6005";

export default function Masterclass() {
	const { id } = useParams();
	const [blob1, setBlob1] = useState(null);
	const [blob2, setBlob2] = useState(null);
	// const [exists, setExists] = useState(false);

	useEffect(() => {
		const source1 = axios.CancelToken.source();
		const source2 = axios.CancelToken.source();
		getBlob1(source1);
		getBlob2(source2);
		return () => {
			source1.cancel();
			source2.cancel();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	const getBlob1 = async (cancel) => {
		await axios(`${domain}/rvideo/playback/1/${id}`, {
			method: "GET",
			responseType: "blob",
			cancelToken: cancel.token,
		})
			.then((res) => {
				setBlob1(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
				setTimeout(() => {
					URL.revokeObjectURL(blob1);
				}, 1000);
			})
			.catch((err) => {});
	};
	const getBlob2 = async (cancel) => {
		await axios(`${domain}/rvideo/playback/2/${id}`, {
			method: "GET",
			responseType: "blob",
			cancelToken: cancel.token,
		})
			.then((res) => {
				setBlob2(URL.createObjectURL(new Blob([res.data], { type: "video/mp4" })));
				setTimeout(() => {
					URL.revokeObjectURL(blob2);
				}, 1000);
			})
			.catch((err) => {});
	};

	return (
		<div className="master-container">
			<div className="text-container">
				<h1>MASTERCLASS</h1>
				<p className="coming-soon">Coming soon...</p>
			</div>
			{/* <div className="video-container">
				<video
					src={blob1}
					className="video-player-rv"
					controls
				/>
				<video src={blob2} className="video-player-rv" controls />
			</div> */}
		</div>
	);
}
