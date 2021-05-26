/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"
import ShowMoreText from 'react-show-more-text';


const Consulting = () => (
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
          `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: center;
              /* margin-top: -3rem; */

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
                      /* margin-right: -15rem; */
                   }
                  `}
            >
                Consulting
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 1rem;
                  padding-top: 0;
                  /* font-size: 0.7rem; */
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
                <ShowMoreText
                    lines={4}
                    anchorClass="show-more-button">
                    <p>There are several practical questions everyone needs to ask themselves in amidst redesigning their website and their digital marketing strategies. Does the new outlook match your brand? Does it need new content? Is the UI outdated? Is your website have enough web presence to increase the traffic, is your social media handle not performing well? Or you are looking for someone expert in rebranding, redesigning and edit the entire strategy your online base. Our expert consultants at Webanah know everything there is to know about web designing, app development, social media marketing, branding and content marketing. The foremost responsibility of our expert consultants is to find the loop holes in your business website and digital marketing strategies and provide you with effective ideas to develop your business into a brand.</p>
                    <p>The suggestions are going to include strategies for marketing, engagement, investment, and much more. And everything our consultants suggests are based on detailed SWOT analysis and audience research. Save your precious time by reaching out to us about your web consultancy needs and our team will have you assisted according to your desired goals.</p>
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
              /* margin-bottom: -5rem; */
              
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
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  align-self: center;
                  padding: 0 20%;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }
            `}
        >
            <Image
                src="/images/2.png"
                width={454}
                height={526}
                layout="intrinsic"
            // src="/images/consulting.png"
            // width={668}
            // height={653}
            />
        </div>
    </div>
)

export default Consulting
