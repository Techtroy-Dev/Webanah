/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import Link from "next/link"
import ShowMoreText from 'react-show-more-text';
import { Button } from "../../Sub-Components/button"

const WhatWeDo = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          /* grid-auto-rows: 50vh; */
          
          // X-Large devices (large desktops, 1200px and up)
          @media (min-width: 1200px) {
              grid-template-columns: 1fr 1fr;
              grid-auto-rows: 100vh;
              }
          height: 110%;
          position: relative;
          &:after {
              background: right -50vw top 2vh/140% no-repeat url('/images/webanah-character2.png');
              @media (min-width: 1200px) {
                  background: right -80% top 0% / 70% no-repeat url('/images/webanah-character2.png');
              }
              content: "";
              opacity: 0.2;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              position: absolute;
              z-index: -2;
          }
        `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: start;
              /* margin-top: -5rem; */

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  /* margin-top: 0; */
                  align-self: center;
                  margin-top: -5rem;
               }
              `}
        >
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.75rem);
                  opacity: 0.75;
                  letter-spacing: 0.1rem;
                  text-align: center;

                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      text-align: left;
                   }
                  `}
            >
                WHAT WE DO</div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  margin-bottom: 0.25rem;
                  /* font-size: 0.80rem; */
                  text-align: center;
                  padding: 1rem;
                  padding-top: 0.75rem;

                  // Small devices (landscape phones, 576px and up)
                  @media (min-width: 576px) {  }
                          
                  // Medium devices (tablets, 768px and up)
                  @media (min-width: 768px) {  }
                          
                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) { 
                      /* font-size: 0.9rem; */
                   }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      text-align: left;
                      padding: 0;
                      margin-top: 0.5rem;
                      margin-bottom: 2rem;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <ShowMoreText
                    lines={4}
                    anchorClass="show-more-button">
                    Webanah is a digital superhero at your rescue for all the digital needs of your brand. With a professional and highly experienced team on board, Webanah provides you with ultimate marketing strategies for your website. Webanah takes your brand to the new heights of success by increasing the audience towards the website through specific promotional strategies like successful SEO, attractive branding, impeccable UI/UX designing, engaging content creation, responsive app development, and ideas-driven consultancy. Our team works untiringly until your website reaches desired results.
    </ShowMoreText>
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  text-align: center;

                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      text-align: left;
                   }
                  `}
            >
                <Link href="/contact"><Button><div>Learn More</div></Button></Link>
            </div>
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              padding: 0 10%;
              /* margin-bottom: -1rem; */
              grid-row: 1 / 2;
              z-index: -1;
              align-self: end;
              justify-self: center;

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) { 
                  padding: 0 10%;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) {  }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  margin-bottom: 2rem;
                  align-self: center;
                  padding: 0 10%;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }

              animation: move_wwd 0.7s linear, move_wwd2 1s linear infinite;
              animation-delay: 0s, 1s;
              animation-direction: normal, alternate;
              @keyframes move_wwd {
                0% {
                    transform: translate(0px, -50%);
                    opacity: 0;
                }
                100% {
                    transform: translate(0px, 0%);
                    opacity: 1;
                }
              }
              @keyframes move_wwd2 {
                  0% {
                      transform: translate(0px, 0%);
                  }
                  100% {
                      transform: translate(0px, -3%);
                  }
              }
            `}
        >
            <Image
                src="/images/webanah-character2.png"
                layout="intrinsic"
                width={654}
                height={589}
            />
        </div>

    </div>
)

export default WhatWeDo
