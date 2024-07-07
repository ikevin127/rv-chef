import { useEffect, useState } from "react";

/**
 * Adds prefix to bucket assets and returns the resource URI
 * @param asset {String}
 * Asset name and extension as a string, e.g. 'logo.png'
 * @returns {String}
 * Returns URI formed with CDN + asset, e.g. 'https://s3.cdn.com/logo.png'
 */
function addMediaPrefix(asset) {
	return `${process.env.REACT_APP_CDN}/${asset}`;
}

/**
 * Returns the current font size based on the window width
 * @returns {String}
 */
function useResponsiveFontSize() {
	const getFontSize = () => (window.innerWidth < 450 ? "16px" : "18px");
	const [fontSize, setFontSize] = useState(getFontSize);

	useEffect(() => {
		const onResize = () => {
			setFontSize(getFontSize());
		};

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	});

	return fontSize;
}

export {
    addMediaPrefix,
    useResponsiveFontSize,
}
