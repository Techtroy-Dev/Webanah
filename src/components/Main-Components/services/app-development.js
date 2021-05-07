/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const AppDevelopment = () => (
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
              margin-top: -8rem;

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  /* margin-top: 5rem; */
                  margin-right: -3rem;
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
                      margin-right: -5rem;
                   }
                  `}
            >
                APP DEVELOPMENT
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 0.5rem;
                  /* margin-bottom: 1rem; */
                  font-size: 0.7rem;
                  text-align: center;

                  // Small devices (landscape phones, 576px and up)
                  @media (min-width: 576px) {  }
                          
                  // Medium devices (tablets, 768px and up)
                  @media (min-width: 768px) {  }
                          
                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) { 
                      font-size: 0.8rem;
                   }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      font-size: 0.9rem;
                      text-align: left;
                      padding: 0;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <p>Webanah takes pride in our track record of satisfied customers and on-time delivery of content. The output by our experts is genuine and our experts provide our clients with data points that can further help in making their engagement better. So, if you are looking to revolutionize your brand with captivating content then reach out to use for immediate assistance and effectiveness.</p>
                <p>Companies work with Webanah to augment their app and web development needs because of our reputable team and trusted end product. Reach out to us if you are looking to design an app for your business or want to redesign your existing app into an updated one with effective framework and strategy. Webanah is always excited to have the back of its clients.</p>
            </div>
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

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) {  }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) { 
                  padding: 0 30%;
                  align-self: end;
               }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  padding: 0 10%;
                  align-self: center;
                  margin-bottom: 3rem;
               }

              animation: move_ad 1s linear infinite;
              animation-direction: alternate;
              @keyframes move_ad {
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
                src="/images/1.png"
                width={698}
                height={465}
                layout="intrinsic"
            // src="/images/app-development.png"
            // width={788}
            // height={464}
            />
        </div>
    </div>
)

export default AppDevelopment
