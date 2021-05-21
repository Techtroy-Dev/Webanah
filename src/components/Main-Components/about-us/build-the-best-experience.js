/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import { Button } from "../../Sub-Components/button"

const BuildTheBestExperience = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          grid-auto-rows: 50vh;
          background: linear-gradient(to top, #01102a 10%, transparent 90%);

          // Medium devices (tablets, 768px and up)
          @media (min-width: 768px) { 
              background: none;
           }
          
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
              margin-bottom: 7.5rem;

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  margin-left: -6rem;
                  padding: 0;
                  margin-bottom: 0;
               }
              `}
        >
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  font-family: 'Green Lantern';
                  color: transparent;
                  font-size: clamp(1rem, -0.875rem + 8.333vw, 2.75rem);
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
                BUILD THE BEST EXPERIENCE
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  /* padding: 0.5rem; */
                  /* margin-bottom: 1rem; */
                  font-size: 0.80rem;
                  /* text-align: center; */

                  // Small devices (landscape phones, 576px and up)
                  @media (min-width: 576px) {  }
                          
                  // Medium devices (tablets, 768px and up)
                  @media (min-width: 768px) {  }
                          
                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) {  }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      text-align: left;
                      padding: 1rem 0;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <p>Webanah has built its galaxy of creativity and every member in the realm has been finely trained to deal with clients with an extremely creative and unique approach. Webanah treats every client separately with complete customization according to their business, needs, and strategies. It's our motto to work until the client gets complete satisfaction and sees the better performance of the website live. Webanah assures you complete personalization throughout the whole process and attention to every detail.</p>
                <p>We do not go for robotic approach to imply same strategies to every customer. We listen to every client with detail and dive deep into their business to extract all the needed information to customize extra ordinary strategies and gain best possible outcomes. Experience the customer-employee relation like never before only at this platform. You will surely feel being welcomed and listened to.</p>
            </div>
        </div>

        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              padding: 0 10%;
              margin-top: 5rem;
              /* opacity: 0.5; */
              margin-right: -5rem;
              grid-row: 1 / 2;
              z-index: -1;
              align-self: start;
              justify-self: center;

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) {  }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) {  }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 1 / 2;
                  padding: 0 20%;
                  margin-top: 0;
                  margin-right: 0;
                  align-self: center;
                  /* opacity: 1; */
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }
              `}
        >
            <Image
                src="/images/webanah-character6.png"
                layout="intrinsic"
                width={472}
                height={864}
            />
        </div>

    </div>
)

export default BuildTheBestExperience