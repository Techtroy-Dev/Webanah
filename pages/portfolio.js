/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Head from "next/head"
import { Scrolls } from "../src/components/Sub-Components/scrollbars"
import PortfolioCard from "../src/components/Main-Components/portfolio/portfolio-card"
import Layout from "../src/components/Main-Components/Layout"

const Portfolio = () => (
    <>
        <Head>
            <title>Portfolio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/Webanah_logo.png" type="image/png"></link>
        </Head>
        <Scrolls total={7} current={6} sectionTitles={['', '', '', '', '', '', 'PORTFOLIO']} />
        <Layout backgroundimage='/images/background2.png'>
            <PortfolioCard />
        </Layout>
    </>
)

export default Portfolio