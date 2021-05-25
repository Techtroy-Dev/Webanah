/** @jsx jsx */

import { Search } from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const SearchEngineOptimization = () => (
    <div
        css={css`
          // X-Small devices (portrait phones, less than 576px)
          display: grid;
          /* grid-auto-rows: 50vh; */
          row-gap: 1rem;
          
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
                   }
                  `}
            >
                SEARCH ENGINE OPTIMIZATION
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 1rem;
                  padding-top: 0;
                  /* font-size: 0.70rem; */
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
                <p>While the best SEO strategies are research-driven, SEO is still a long way from an accurate science. In any case, there are sure some specific strategies you can hope to get from any advanced organization. Because of the differing levels of performance, and ranges of abilities in the business, outcomes, and ROI will fluctuate from one organization to another. In addition, an effective SEO organization should truly comprehend your business and examine your industry to accumulate working information on your topic.</p>
                <p>Webanah has marketing professionals that perform detailed research and craft such promotional strategies that will take your business up a notch, based on the results of the research. SEO audit, competitor analysis, Link building, on-page SEO, off page SEO, technical SEO, keyword research everything your website needs, Webanah has the potential to deal with it efficiently and provides monthly report to the clients to keep them updated about the progress.</p>
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
              padding: 0 35%;

              @media (max-width: 320px) {
                  align-self: center;
              }

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) { 
                  padding: 0 35%;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) { 
                  padding: 0 40%;
               }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) { 
                  margin-top: 7.5rem;
               }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  align-self: center;
                  margin-top: 0;
                  padding: 0 30%;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }

              `}
        >
            <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  `}>
                <Image
                    css={css`
                    animation: move_seo 2s linear;
                    animation-delay: 0.75s;
                    @keyframes move_seo {
                      0% {
                          transform: translate(0, 400%);
                          opacity: 0;
                      }
                      100% {
                          transform: translate(0, 0%);
                          opacity: 1;
                      }
                    }`
                    }
                    src="/images/seo-rocket.png"
                    layout="intrinsic"
                    width={293}
                    height={609}
                />
                {/* <Image
                    src="/images/seo-platform.png"
                    layout="intrinsic"
                    width={685}
                    height={458}
                /> */}
            </div>
        </div>
    </div>
)

export default SearchEngineOptimization
