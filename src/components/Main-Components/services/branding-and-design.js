/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import ReadMoreReact from 'read-more-react';

const BrandingAndDesign = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          /* grid-auto-rows: 50vh; */
          /* row-gap: 2rem; */
          
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
              /* margin-top: -5rem; */

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
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
                      margin-right: -15rem;
                   }
                  `}
            >
                BRANDING & DESIGN
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 1rem;
                  padding-top: 0;
                  /* font-size: 0.6rem; */
                  text-align: center;

                  // Small devices (landscape phones, 576px and up)
                  @media (min-width: 576px) {  }
                          
                  // Medium devices (tablets, 768px and up)
                  @media (min-width: 768px) {  }
                          
                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) { 
                      /* font-size: 0.8rem; */
                   }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      font-size: 0.90rem;
                      text-align: left;
                      padding: 0;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <p>Having a unique identity that is positioned into audience’s mind be it an enticing logo, attractive color palette or catchy taglines and headlines, merchandise, ATL and BTL activities all fall under branding and design department. Webanah is a leading branding and design company with an exceptional design team that creates original, intriguing, and innovative designs that capture the essence of your brand. The team’s designs help our customers in maximizing their revenues and engagement. In the modern world, your designs are your first interaction with your potential clients, making your designs the most important part of your company’s overview.</p>
                <p>Reach out to us for the absolute best to work on your company’s needs. Our clients can count on total transparency from us, as our team appreciates our clients’ input in making the final product better than the initial drafts. Hundreds of clients choose to trust us with their everyday designing needs. Waste no time and reach out to get the best team of designers working for you in no time.</p>
            </div>
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              padding: 0 25%;
              grid-row: 1 / 2;
              z-index: -1;
              align-self: center;
              justify-self: center;

              @media (max-width: 320px) {
                  align-self: center;
              }

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) { 
                  padding: 0 35%;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) {  }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) { 
                  align-self: end;
               }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  padding: 0 20%;
                  align-self: center;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }

              animation: move_bd 1s linear infinite;
              animation-direction: alternate;
              @keyframes move_bd {
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
                src="/images/branding-and-design.png"
                layout="intrinsic"
                width={471}
                height={547}
            />
        </div>
    </div >
)

export default BrandingAndDesign
