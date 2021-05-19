import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from "next/image"

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

const image = css`
  /*border: 3px #16f533 solid;*/
  /*text-align: center;*/
  &:hover {
      border-radius: 10px;
      border-right: 0.1rem #16f533 solid;
      border-left: 0.1rem #16f533 solid;
  
  /*padding-left: 0%;
  padding right: 0%;*/
  }`

const text = css`
  color: white;
  margin-top: 0.5rem;
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
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
  }`


function CaseStudyCard(props) {
    return (
        <div
            css={css`
              /* height: 93.75rem; */
              margin-top: 7.5rem;
              @media (min-width: 1200px) {
                margin-top: 3rem;
              }
        `}>
            <div css={css`
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
                OUR CASE STUDIES
      </div>

            <div css={flexContainer}>

                <div css={flexItem}>

                    <div css={image}>
                        <Image src="/images/case-study-1.png" alt="Portfolio Image 1" width={410} height={410}></Image>
                    </div>

                    <div css={text}>Coming soon...</div>

                </div>

                <div css={flexItem}>

                    <div css={image}><Image src="/images/case-study-2.png" alt="Portfolio Image 2" width={410} height={410}></Image></div>

                    <div css={text}>Coming soon...</div>

                </div>

                <div css={flexItem}>

                    <div css={image}><Image src="/images/case-study-3.png" alt="Portfolio Image 3" width={410} height={410}></Image></div>

                    <div css={text}>Coming soon...</div>

                </div>

            </div>

        </div>
    );
}

export default CaseStudyCard;