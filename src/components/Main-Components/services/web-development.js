/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const WebDevelopment = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          /* grid-auto-rows: 50vh; */
          row-gap: 1rem;

          // Large devices (desktops, 992px and up)
          /* @media (min-width: 992px) { 
              margin-top: 5rem;
           } */

          // X-Large devices (large desktops, 1200px and up)
          @media (min-width: 1200px) {
              grid-template-columns: 1fr 1fr;
              grid-auto-rows: 100vh;
              margin-top: 0;
              }
          `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: center;
              /* margin-top: -5rem; */

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  /* margin-top: 5rem; */
                  margin-right: -3rem;
                  align-self: center;
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
                      margin-right: -15rem;
                   }
                  `}
            >
                Web DEVELOPMENT
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 1rem;
                  /* padding-top: 0; */
                  /* font-size: 0.70rem; */
                  text-align: center;

                  // Small devices (landscape phones, 576px and up)
                  @media (min-width: 576px) {  }
                          
                  // Medium devices (tablets, 768px and up)
                  @media (min-width: 768px) {  }
                          
                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) {  }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      font-size: 0.90rem;
                      text-align: left;
                      padding: 0;
                      margin-top: 0.5rem;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                Webanah is a full-stack developing company with extensive research in the field. With several services available like developing websites, web applications, web portals, APIs, and Ecommerce websites, we have had an outstanding reputation among its clients for impressive output and on-time delivery. Web development deals in scaling, designing, integrating, and maintaining software that works through the internet or intranet the team offers competency in the latest language versions, frameworks, innovative tech designs, and AI. Web applications constructed by us tend to serve complexity and increasing number of users due to their modular architectural designs, cloud resources, and messaging. With your apps being developed by experts in both front and back-end patterns, the website/app is also modifiable and can easily adapt to layered or modular architecture. Client recommendation is something Webanah takes pride in because of our several innovative web designs thriving on the internet for your esteemed clients. Trust us with our next project to know just how good our team is.
            </div>
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              padding: 0 15%;
              margin-bottom: -2rem;
              grid-row: 1 / 2;
              z-index: -1;
              align-self: center;
              justify-self: center;

              @media (max-width: 320px) {
                  align-self: center;
              }

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) { 
                  padding: 0 25%;
                  margin-bottom: -5rem;
                  align-self: end;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) { 
                  padding: 0 30%;
               }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  align-self: center;
                  /* padding: 0 10%; */
                  padding: 0;
                  margin-bottom: 2rem;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }

              animation: move_wd 1s linear infinite;
              animation-direction: alternate;
              @keyframes move_wd {
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
                src="/images/3.png"
                width={796}
                height={531}
                layout="intrinsic"
            // src="/images/web-development.png"
            // width={1142}
            // height={915}
            />
        </div>
    </div>
)

export default WebDevelopment
