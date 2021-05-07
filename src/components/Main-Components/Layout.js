/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import React from "react";
import Header from "../Main-Components/Header";
import Main from "../Main-Components/Main";
import Footer from "../Main-Components/Footer";

function Layout({ backgroundimage, children }) {
	return (
		<>
			<div
				css={css`
          		  background: center / cover no-repeat url(${backgroundimage}) fixed;
        		`}>
				<Header />
				<Main>{children}</Main>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Layout;
