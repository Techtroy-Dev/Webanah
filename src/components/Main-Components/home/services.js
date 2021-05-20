/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image";


const Services = () => (
  <div
    css={css`
          display: flex;
          flex-direction: column;
          font-size: 0.55rem;
          text-align: center;
          `}>
    <div
      css={css`
              /* padding: 0 5rem; */
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              grid-template-rows: repeat(3, 1fr);
              align-items: center;
              justify-items: center;

              /* 
                ##Device = Desktops
                ##Screen = 1281px to higher resolution desktops
              */
              
              @media (min-width: 1281px) {
              
                /* CSS */
                margin-top: 2rem;

              
              }
              
              /* 
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
              */
              
              @media (min-width: 1025px) and (max-width: 1280px) {
              
                /* CSS */
              
              }
              
              /* 
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
              */
              
              @media (min-width: 768px) and (max-width: 1024px) {
              
                /* CSS */
                margin-top: 10rem;
              
              }
              
              /* 
                ##Device = Tablets, Ipads (landscape)
                ##Screen = B/w 768px to 1024px
              */
              
              @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
              
                /* CSS */
              
              }
              
              /* 
                ##Device = Low Resolution Tablets, Mobiles (Landscape)
                ##Screen = B/w 481px to 767px
              */
              
              @media (min-width: 481px) and (max-width: 767px) {
              
                /* CSS */
              
              }
              
              /* 
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
              */
              
              @media (min-width: 320px) and (max-width: 480px) {
              
                /* CSS */
                margin-top: 5rem;
              
              }

              @media (max-width: 320px) {
                  grid-template-columns: repeat(6, 53.33px);
              }
              `}>
      <div
        css={css`
                  grid-row: 3 / 4;
                  grid-column: 1 / 2;

                  animation: move_app 1s linear infinite;
                  animation-direction: alternate;
                  @keyframes move_app {
                      0% {
                          transform: translate(0px, 0%);
                      }
                      100% {
                          transform: translate(0px, -8%);
                      }
                  }
                  `}>
        <Image
          src="/images/app-development-icon.png"
          layout="intrinsic"
          width={160 * 0.5}
          height={144 * 0.5}
        />
        <div>APP DEVELOPMENT</div>
      </div>
      <div
        css={css`
                  grid-row: 2 / 3;
                  grid-column: 2 / 3;

                  animation: move_b 1s linear infinite;
                  animation-direction: alternate;
                  @keyframes move_b {
                      0% {
                          transform: translate(0px, 0%);
                      }
                      100% {
                          transform: translate(0px, 8%);
                      }
                  }
                  `}>
        <Image
          src="/images/brand-and-design-icon.png"
          layout="intrinsic"
          width={160 * 0.5}
          height={144 * 0.5}
        />
        <div>BRANDING & DESIGN</div>
      </div>
      <div
        css={css`
                  grid-row: 1 / 2;
                  grid-column: 3 / 4;
                  margin-left: -2rem;

                  animation: move_seo 1s linear infinite;
                  animation-direction: alternate;
                  @keyframes move_seo {
                      0% {
                          transform: translate(0px, 0%);
                      }
                      100% {
                          transform: translate(0px, -8%);
                      }
                  }
                  `}>
        <Image
          src="/images/SEO-Icon.png"
          layout="intrinsic"
          width={160 * 0.5}
          height={144 * 0.5}
        />
        <div>SEARCH ENGINE OPTIMIZATION</div>
      </div>
      <div
        css={css`
                  grid-row: 1 / 2;
                  grid-column: 4 / 5;

                  animation: move_cp 1s linear infinite;
                  animation-direction: alternate;
                  @keyframes move_cp {
                      0% {
                          transform: translate(0px, 0%);
                      }
                      100% {
                          transform: translate(0px, -8%);
                      }
                  }
                  `}>
        <Image
          src="/images/content-production-icon.png"
          layout="intrinsic"
          width={160 * 0.5}
          height={144 * 0.5}
        />
        <div>CONTENT PRODUCTION</div>
      </div>
      <div
        css={css`
                  grid-row: 2 / 3;
                  grid-column: 5 / 6;
                  margin-right: -2rem;

                  animation: move_c 1s linear infinite;
                  animation-direction: alternate;
                  @keyframes move_c {
                      0% {
                          transform: translate(0px, 0%);
                      }
                      100% {
                          transform: translate(0px, 8%);
                      }
                  }
                  `}>
        <Image
          src="/images/consulting-icon.png"
          layout="intrinsic"
          width={160 * 0.5}
          height={161 * 0.5}
        />
        <div>CONSULTING</div>
      </div>
      <div
        css={css`
                  grid-row: 3 / 4;
                  grid-column: 6 / 7;

                  animation: move_app 1s linear infinite;
                  animation-direction: alternate;
                  @keyframes move_app {
                      0% {
                          transform: translate(0px, 0%);
                      }
                      100% {
                          transform: translate(0px, -8%);
                      }
                  }
                  `}>
        <Image
          src="/images/social-media-management-icon.png"
          layout="intrinsic"
          width={196 * 0.5}
          height={156 * 0.5}
        />
        <div>SOCIAL MEDIA MANAGEMENT</div>
      </div>
    </div>
    <div
      css={css`
              /* 
              ##Device = Desktops
              ##Screen = 1281px to higher resolution desktops
              */
              
              @media (min-width: 1281px) {
              
                /* CSS */
                margin-top: -15rem;
                padding: 0 2rem;
              
              }
              
              /* 
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
              */
              
              @media (min-width: 1025px) and (max-width: 1280px) {
              
                /* CSS */
                margin-top: -14rem;
                padding: 0 2rem;
              
              }
              
              /* 
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
              */
              
              @media (min-width: 768px) and (max-width: 1024px) {
              
                /* CSS */
                margin-top: -10rem;
              
              }
              
              /* 
                ##Device = Tablets, Ipads (landscape)
                ##Screen = B/w 768px to 1024px
              */
              
              @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
              
                /* CSS */
              
              }
              
              /* 
                ##Device = Low Resolution Tablets, Mobiles (Landscape)
                ##Screen = B/w 481px to 767px
              */
              
              @media (min-width: 481px) and (max-width: 767px) {
              
                /* CSS */
              
              }
              
              /* 
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
              */
              
              @media (min-width: 320px) and (max-width: 480px) {
              
                /* CSS */
                margin-top: -7rem;
              
              }
              `}>
      <Image
        src="/images/13.png"
        layout="intrinsic"
        width="1440"
        height="1994"
      />
    </div>
  </div>

)

export default Services;