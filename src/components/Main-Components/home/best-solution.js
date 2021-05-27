/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import ShowMoreText from 'react-show-more-text';

const BestSolution = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          /* grid-auto-rows: 50vh; */

          // Large devices (desktops, 992px and up)
          @media (min-width: 992px) { 
              grid-template-columns: 1fr 1fr;
              grid-auto-rows: 100vh;
           }

          // X-Large devices (large desktops, 1200px and up)
          @media (min-width: 1200px) {
              /* grid-template-columns: 1fr 1fr;
              grid-auto-rows: 100vh; */
              }
          /* height: 110%; */
          `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: center;
              /* margin-bottom: 5rem; */

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  /* align-self: center; */
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

                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) { 
                      text-align: left;
                   }

                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      /* text-align: left; */
                   }
                  `}
            >
                FANTASIZED IDEAS TURN INTO REALITY</div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  /* margin-bottom: 1rem; */
                  /* font-size: 0.8rem; */
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
                      text-align: left;
                      padding: 0;
                   }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      /* text-align: left; */
                      margin-top: 0.5rem;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <ShowMoreText
                    lines={4}
                    anchorClass="show-more-button">
                    Online exposure is the best promotion for your business at present. And Webanah is your superpower to improve your online presence. We work as a part of your business team to understand your goals and market and provide a complete package of services that would work as a booster in whole to take your business to a higher rank on search engines. We provide detailed services of web development, content marketing, SEO, branding and design, social media marketing, app development, and consulting. So, if you are looking to boost your business and website, Webanah is the best resort for your business with experienced designers and marketers on board.
    </ShowMoreText>
            </div>
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              padding: 0 20%;
              /* margin-bottom: -1rem; */
              grid-row: 1 / 2;
              z-index: -1;
              align-self: end;
              justify-self: center;

              @media (max-width: 320px) {
                  align-self: center;
              }

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) { 
                  padding: 0 25%;
                  margin-bottom: -5rem;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) { 
                /* padding: 0 30%; */
                margin-top: 5rem;
                margin-bottom: 0;
               }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) { 
                grid-column: 1 / 2;
                padding: 0 10%;
                margin-top: 0;
                margin-bottom: 0;
                align-self: center;
               }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  /* grid-column: 1 / 2;
                  padding: 0 10%;
                  margin-top: 0;
                  margin-bottom: 0;
                  align-self: center; */
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }
              
              animation: move_bs 0.5s linear, move_bs2 1s linear infinite;
              animation-delay: 0s, 1s;
              animation-direction: normal, alternate;
              /* @keyframes move_bs {
                0% {
                    transform: translate(-100%);
                    opacity: 0;
                }
                100% {
                    transform: translate(0%);
                    opacity: 1;
                }
              } */
              @keyframes move_bs2 {
                  0% {
                      transform: translate(0px, 0%);
                  }
                  100% {
                      transform: translate(0px, -3%);
                  }
              }
              /*  @keyframes move3 {
                  0% {
                      transform: translate(-100%);
                      opacity: 0;
                  }
                  100% {
                      transform: translate(0%);
                      opacity: 1;
                  }
              }
              animation: move3 0.5s linear;*/
              `}
        >
            <Image
                src="/images/fantasized-ideas-turn-into-reality.png"
                layout="intrinsic"
                width={554}
                height={634}
            />
        </div>
    </div>
)

export default BestSolution