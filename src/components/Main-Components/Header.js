/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/react"
import * as faSolid from "@emotion-icons/fa-solid"
import Link from "next/link"
import Image from "next/image"
import { Sidebar } from "../Sub-Components/sidebar"
import { Button } from "../Sub-Components/button"

function Header() {
	return (
		<div
			css={css`
          	  display: flex;
          	  justify-content: space-between;
          	  padding-top: 0.5rem;
                  `}
		>
			<Sidebar />
			<div
				css={css`
            	  margin-left: 3rem;
            	  margin-top: -0.2rem;
            	  position: fixed;
            	  z-index: 2;
            `}>
				<Image
					src="/images/webanah-logo.png"
					width={63 * 0.65}
					height={65 * 0.65}
					layout="fixed"
				/>
			</div>
			<faSolid.Search
				css={css`
            	  margin-left: auto;
            	  position: fixed;
            	  right: 6.5rem;
            	  padding-top: 0.45rem;
            	  padding-right: 1rem;
            	  z-index: 2;
            	  ${base};
            `}
				size="18"
			/>
			<div
				css={css`
            	  position: fixed;
            	  right: 1rem;
            	  z-index: 2;
            `}>
				<Link href="/contact">
					<a>
						<Button
							css={css`
							  font-weight: bold;
							  `}>Contact Us</Button>
					</a>
				</Link>
			</div>
		</div>
	);
}

const base = css`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
`

export default Header;
