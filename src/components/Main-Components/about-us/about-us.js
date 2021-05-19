/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../Sub-Components/button"

const AboutUs = () => (
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
          height: 110%;
          position: relative;
          &:after {
              background: top 10vh left -60vw / 120% no-repeat url('/images/webanah-character1.png');
              @media (min-width: 1200px) {
                  background: -210% 0% / 80% no-repeat url('/images/webanah-character1.png');
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
              padding: 0.5rem;
              margin-top: -5rem;
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  margin-right: -1rem;
                  padding: 0;
                  margin-top: 0;
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
                About Us
            </div>

            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  /* padding: 0.5rem; */
                  margin-bottom: 3rem;
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
                Webanah strives to turn your business into a digital revolution by crafting elite design for your website and marketing strategies that would drive traffic insanely towards your business and help you generate maximum revenue. Having a unique position in audiences mind is not an easy task. You need to hit the engaging factor to make a lasting impression. Webanah takes this task too serious and have experienced professionals on board who run research to extract the strong opportunities for your business to grow online and curate effective strategies to implement. Webanah takes pride in our track record of satisfied customers and on-time delivery of content. The output by our experts is genuine and our experts provide our clients with data points that can further help in making their engagement better. Reach out to our experts to know more about our services.
            </div>
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              /* padding: 0 10%; */
              margin-top: 7rem;
              margin-right: -2rem;
              grid-row: 1 / 2;
              z-index: -1;
              align-self: start;
              justify-self: center;

              @media (max-width: 320px) {
                  margin-top: 5rem;
              }

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) { 
                  padding: 0 20%;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) {  }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  padding: 0 10%;
                  margin-top: 25rem;
                  margin-right: 0;
                  align-self: center;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }
              `}>
            <Image
                src="/images/webanah-character1.png"
                layout="intrinsic"
                width={638}
                height={1297}
            />
        </div>
    </div>
)

export default AboutUs

