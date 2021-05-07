/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const OurMission = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          grid-auto-rows: 50vh;
          
          // X-Large devices (large desktops, 1200px and up)
          @media (min-width: 1200px) {
              grid-template-columns: 1fr 1fr;
              grid-auto-rows: 100vh;
              }
          `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: center;
              padding: 0.5rem;
              margin-bottom: 5rem;

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  padding: 0;
                  margin-top: 0;
                  margin-bottom: 0;
               }
              `}
        >
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  font-family: 'Green Lantern';
                  color: transparent;
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.75rem);
                  -webkit-text-stroke: 0.06rem #16f533;
                  letter-spacing: 0.25rem;
                  opacity: 0.75;
                  /* text-align: center; */

                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      /* text-align: left; */
                   }
                  `}
            >
                Our Mission</div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  /* padding: 0.5rem; */
                  margin-bottom: 1rem;
                  font-size: 0.80rem;
                  /* text-align: center; */

                  // Small devices (landscape phones, 576px and up)
                  @media (min-width: 576px) {  }
                          
                  // Medium devices (tablets, 768px and up)
                  @media (min-width: 768px) {  }
                          
                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) { 
                      font-size: 0.9rem;
                   }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      text-align: left;
                      padding: 1rem 0;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <p>Webanah is your ultimate business savior. The sole mission of Webanah is to help small and large businesses to grow online with better marketing and ROI. Our professional team tracks every marketing activity that your business follows and eliminates needless strategies. We design effective promotional strategies that increase the traffic towards your business website through detailed research. We crawl deep into the statistics of your target market, niche, and opportunities to create effective strategies that would help your business to grow its online presence.</p>
                <p>And to gain that boost in your business we have a team of professional team of developers on board to design your website, apps and provide social media marketing. Our mission is to turn your business in to a brand and position it into customer’s mind through effective promotional strategies.</p>
            </div>
            {/* <div
                css={css`
                  text-align: center;
                  `}
            >
                <Button>Contact Us</Button>
            </div> */}
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              padding: 0 10%;
              grid-row: 1 / 2;
              z-index: -1;
              align-self: end;
              justify-self: center;

              @media (max-width: 320px) {
                  align-self: center;
              }

              @media (max-width: 320px) {
                  align-self: center;
              }
              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) {  }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) { 
                margin-bottom: -5rem;
               }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) { 
                  margin-bottom: -10rem;
               }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  padding: 0;
                  align-self: center;
                  margin-bottom: 0;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }
              `}
        >
            <Image
                src="/images/our-mission.png"
                layout="intrinsic"
                width={762}
                height={427}
            />
        </div>
    </div>
)

export default OurMission
