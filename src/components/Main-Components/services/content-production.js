/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"
import ShowMoreText from 'react-show-more-text';


const ContentProduction = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          /* grid-auto-rows: 50vh; */
          row-gap: 1rem;
          /* margin-top: 1rem; */

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
          `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: center;
              /* margin-bottom: 7rem; */

              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) { 
                  margin-bottom: 0;
               }
                
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

                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) { 
                      text-align: left;
                      margin-right: -5rem;
                   }

                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      /* text-align: left;
                      margin-right: -5rem; */
                   }
                  `}
            >
                CONTENT PRODUCTION
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
                      font-size: 0.8rem;
                      text-align: left;
                      padding: 0;
                   }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      /* font-size: 0.90rem;
                      text-align: left;
                      padding: 0; */
                      font-size: 1rem;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <ShowMoreText
                    lines={4}
                    anchorClass="show-more-button">
                    <p>Content decides whether your website will rank better on a search engine or not? Unique content marketing that entices customers as well as ranks high on google is something Webanah is proudly an expert in. Our team at Webanah wants to generate tangible changes for your business by creating the best possible content that may be required in your social media run.  The experts present here to ensure quality in their final products by keeping them one hundred percent unique. Engage with potential customers by using our special and on-brand social media content like custom images, thumbnails, social media posts, website content, and more.</p>
                    <p>Webanah takes pride in our track record of satisfied customers and on-time delivery of content. The output by our experts is genuine and our experts provide our clients with data points that can further help in making their engagement better. So, if you are looking to revolutionize your brand with captivating content then reach out to use for immediate assistance and effectiveness.</p>
                </ShowMoreText>
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
                  padding: 0 40%;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) { 
                  padding: 0 30%;
                  margin-bottom: -4rem;
               }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) { 
                  grid-column: 2 / 3;
                  padding: 0 20%;
                  align-self: center;
                  margin-bottom: 0;
               }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  /* grid-column: 2 / 3;
                  padding: 0 20%;
                  align-self: center;
                  margin-bottom: 0; */
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }

              animation: move_cp 1s linear infinite;
              animation-direction: alternate;
              @keyframes move_cp {
                0% {
                    transform: translate(0%);
                }
                100% {
                    transform: translate(-3%);
                }
            }
            `}
        >
            <Image
                src="/images/content-production.png"
                layout="intrinsic"
                width={477}
                height={518}
            />
        </div>
    </div>
)

export default ContentProduction
