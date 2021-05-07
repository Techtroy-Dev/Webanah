import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"

/* application of flexbox start */
const flexContainer = css`
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 3rem;
  ${'' /* height: 80vh; */}
  ${'' /* margin-top: 2.375rem; */}
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
  font-family: Green Lantern;
  @media (min-width: 768px) {
      gap: 2rem;
      margin-left: 10%;
      margin-right: 10%;
  }
  @media (min-width: 1200px) {
      align-items: start;
      gap: 1rem;
      margin-left: 12%;
      margin-right: 12%;
      height: 80vh;
  }`

const flexItem = css`
  text-align: center;
  ${'' /* margin-bottom: 1.875rem; */}
  flex: 1 0 90%;
  @media (min-width: 768px) {
      ${'' /* margin-right: 1.125rem; */}
      flex: 1;
  }
  @media (min-width: 1200px) {
      /*margin-right: 1.125rem;*/
      ${'' /* margin-left: 4%; */}
      ${'' /* margin-right: 4%; */}
  }`

/* application of flexbox end */

const gridContainer = css`
  /*border: 1px solid black;*/
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5rem;
  
  @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      margin-left: 10%;
      margin-right: 10%;
      text-align: center;
      }

  @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      margin-left: 12%;
      margin-right: 12%;
  }
  `

const gridItem = css`
  /*border: 1px solid red;*/
  text-align: center;
  /*margin-bottom: 1.875rem;*/
  @media (min-width: 768px) {
      margin-right: 1.125rem;
  }
  @media (min-width: 1200px) {
      margin-right: 1.125rem;
  }
  `

const text = css`  
  color: white;
  margin-top: 1.875rem;
  /*font-weight: bold;*/
  font-size: 0.9rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  font-family:'Raleway', Helvetica, Arial, sans-serif;
  /* width: 23.125rem;*/
  text-align: center;
  @media (max-width: 768px){
      font-size: 0.9rem; 
      margin-top: 0.9375rem;
      margin-bottom: 0.9375rem;
  }
  @media (max-width: 545px){
      font-size: 0.875rem; 
      margin-top: 0.9375rem;
      margin-bottom: 0.9375rem;
      }
      `

const imageDiv = css`
  /*border: 1px solid white;*/
  /*margin-left: 1.875rem;*/
  margin-top: 1rem;
  position: relative;
  /*@media (max-width: 768px)
  {
  margin-left: 45px;
  }*/
  &:hover {
      filter: saturate(150%);
  }`


const blogImage = css`
  margin-left: 0px;
  position: absolute;
  /* top: 1.3125rem;*/ /* 21px */
  bottom: 11%;
  left: 1%;
  right: 1%;
  `

const blogImageBg = css`
                        `


function BlogsCard(props) {
    return (
        <div
            css={css`
              /* height: 93.75rem; */
              margin-top: 5rem;
              height: 100vh;
              @media (max-width: 768px) {
                  /* height: 196.875rem; */
                  }`}>

            <div
                css={css`
                  text-align: center;
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.75rem);
                  opacity: 0.75;
                  letter-spacing: 0.5rem;
                  color: transparent;
                  -webkit-text-stroke: 0.06rem #16f533;
                  padding: 0.25rem;
                  margin-bottom: 10vh;

                  @media (max-width: 1280px){
                    margin-top: 15vh;
                    margin-bottom: 8vh;
                  }
              `}>
                LATEST BLOG POST
            </div>

            <div css={flexContainer}>

                <div css={flexItem}>

                    <div css={imageDiv}>
                        <div css={blogImageBg}>
                            <Image src="/images/blog-border.png" alt="Blog Backgroud Image 1" width={405} height={250}></Image>
                        </div>
                        <div css={blogImage}>
                            <Image src="/images/blog.png" alt="Blog Image 1" width={400} height={200}></Image>
                        </div>
                    </div>

                    <div css={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna</div>

                </div>

                <div css={flexItem}>

                    <div css={imageDiv} >
                        <div css={blogImageBg}>
                            <Image src="/images/blog-border.png" alt="Blog Backgroud Image 2" width={405} height={250}></Image>
                        </div>
                        <div css={blogImage}>
                            <Image src="/images/blog.png" alt="Blog Image 2" width={400} height={200}></Image>
                        </div>
                    </div>

                    <div css={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna</div>

                </div>

                <div css={flexItem}>

                    <div css={imageDiv}>
                        <div css={blogImageBg}>
                            <Image src="/images/blog-border.png" alt="Blog Backgroud Image 3" width={405} height={250}></Image>
                        </div>
                        <div css={blogImage}>
                            <Image src="/images/blog.png" alt="Blog Image 3" width={400} height={200}></Image>
                        </div>
                    </div>

                    <div css={text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna</div>

                </div>

            </div>

        </div>
    );
}

export default BlogsCard;