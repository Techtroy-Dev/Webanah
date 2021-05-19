/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"
import Link from "next/link";
import { Button } from "../../Sub-Components/button"

const Home = () => (
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
              background: top -25vh right -30vw / 200% no-repeat url('/images/webanah-character3.png');
              @media (min-width: 1200px) {
                  background: top -15vh right -25vw / 70% no-repeat url('/images/webanah-character3.png');
              }
              content: "";
              opacity: 0.2;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              position: absolute;
              z-index: -2;   
          }
          `}
    >
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              align-self: center;
              margin-top: -7.5rem;

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  margin-top: -5rem;
               }
              `}
        >
            {/* <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 3.75rem);
                  letter-spacing: 0.1rem;
                  `}
            >
                CREATIVITY REALM
            </div> */}
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 0 15%;
                  margin-bottom: -1rem;
                  margin-left: -2.5rem;

                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      padding: 0;
                      }
            `}>
                <Image
                    src="/images/Title.png"
                    layout="intrinsic"
                    width={736}
                    height={305}
                />
            </div>

            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 0 0.5rem;
                  margin-bottom: 0.25rem;
                  font-size: 0.80rem;
                  text-align: center;

                  // Small devices (landscape phones, 576px and up)
                  @media (min-width: 576px) {  }
                          
                  // Medium devices (tablets, 768px and up)
                  @media (min-width: 768px) {  }
                          
                  // Large devices (desktops, 992px and up)
                  @media (min-width: 992px) { 
                      font-size: 0.9rem;
                      margin-bottom: 1rem;
                   }
                          
                  // X-Large devices (large desktops, 1200px and up)
                  @media (min-width: 1200px) { 
                      text-align: left;
                      padding: 0;
                      margin-bottom: 2rem;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                Webanah is your ultimate fantasy that has come alive. Your dream of having an established and attractive website design for your business with commendable online performance and abundant revenue is Webanah’s food for soul. Webanah use your dream to energize its webanarians who make your brand rule the online universe with engaging design, unparallel digital marketing strategies and position it to the throne of search engines' highest rank.
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
              /* padding: 0 5%; */
              margin-bottom: -30.5vh;
              grid-row: 1 / 2;
              z-index: -1;
              align-self: center;
              justify-self: center;

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) {  }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) {  }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  margin-bottom: 0;
                  grid-column: 2 / 3;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }

              @keyframes move {
                  0% {
                      transform: translate(100%);
                      opacity: 0;
                  }
                  100% {
                      transform: translate(0%);
                      opacity: 1;
                  }
              }
              animation: move 0.5s linear;
              `}
        >
            <Image
                css={css``}
                src="/images/webanah-character3.png"
                layout="intrinsic"
                width={930}
                height={872}
            />
        </div>

    </div>
)

export default Home
