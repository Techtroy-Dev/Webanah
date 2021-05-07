/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Head from "next/head"
import { Scrolls } from "../src/components/Sub-Components/scrollbars"
import CaseStudyCard from "../src/components/Main-Components/case-studies/case-study-card"
import Layout from "../src/components/Main-Components/Layout"

const CaseStudy = () => (
    <>
        <Head>
            <title>Case Studies</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/Webanah_logo.png" type="image/png"></link>
        </Head>
        <Scrolls total={7} current={6} sectionTitles={['', '', '', '', '', '', 'CASE STUDIES']} />
        <Layout backgroundimage='/images/background2.png'>
            <CaseStudyCard />
        </Layout>
    </>
)

export default CaseStudy