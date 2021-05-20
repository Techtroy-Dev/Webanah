/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../Sub-Components/button"

const BusinessGrowthAgency = () => (
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
          height: 110%;
          position: relative;
          &:after {
              @media (min-width: 576px) {
                  background: -50% -10% / 60% no-repeat url('/images/webanah-character4.png');
              }
              content: "";
              opacity: 0.2;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              position: absolute;
              z-index: -1;
          }
          `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: center;
              margin-top: -5rem;

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) {
                  margin-right: -3rem;
                  /* margin-top: 5rem; */
              }
              `}
        >
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 1.75rem);
                  opacity: 0.75;
                  letter-spacing: 0.1rem;
                  text-align: center;

                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      text-align: left;
                   }
                  `}
            >
                CALIFORNIA’S PREMIER BUSINESS GROWTH AGENCY
            </div>

            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 0.5rem;
                  margin-bottom: 1rem;
                  font-size: 0.90rem;
                  text-align: center;

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
                Welcome to Webanarium, a place where business growth ideas are transformed into reality with a potion of updated development strategies and a marketing magic spell of Webanah, to reach the universe of leading brands.
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
                <Link href="/contact"><Button><div>CONTACT US</div></Button></Link>
            </div>
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              /* padding: 0 10%; */
              margin-top: 20vh;
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
                  grid-column: 2 / 3;
                  padding: 0 10%;
                  margin-top: 20rem;
                  align-self: center;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }
              `}
        >
            <Image
                src="/images/webanah-character4.png"
                layout="intrinsic"
                width={726}
                height={1373}
            />
        </div>

    </div>
)

export default BusinessGrowthAgency

