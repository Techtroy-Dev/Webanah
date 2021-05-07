/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/react";
import { globalStyles } from "../src/styles"
// import "../public/app/styles/sass/main.scss";
import PropTypes from "prop-types";
// import Layout from "../src/components/Main-Components/Layout";

// eslint-disable-next-line react/prop-types

function MyApp({ Component, pageProps }) {
	return (
		<>
			{ globalStyles }
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
