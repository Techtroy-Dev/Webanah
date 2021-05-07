/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Head from "next/head"
import { Scrolls } from "../src/components/Sub-Components/scrollbars"
import BlogsCard from "../src/components/Main-Components/blogs/blog-card"
import Layout from "../src/components/Main-Components/Layout"

const Blogs = () => (
    <>
        <Head>
            <title>Blogs</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/Webanah_logo.png" type="image/png"></link>
        </Head>
        <Scrolls total={7} current={6} sectionTitles={['', '', '', '', '', '', 'BLOGS']} />
        <Layout backgroundimage='/images/background2.png'>
            <BlogsCard />
        </Layout>
    </>
)

export default Blogs