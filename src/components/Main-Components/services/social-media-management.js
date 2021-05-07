/** @jsx jsx */

import { Search } from "@emotion-icons/fa-solid"
import { css, jsx } from "@emotion/react"
import Image from "next/image"
import { Button } from "../../Sub-Components/button"


const SocialMediaManagement = () => (
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
              margin-top: -5rem;

              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  /* margin-top: 5rem; */
                  margin-right: -4rem;
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
                      /* margin-right: -5rem; */
                   }
                  `}
            >
                SOCIAL MEDIA MANAGAMENT
            </div>
            <div
                css={css`
                  // X-Small devices (portrait phones, less than 576px)
                  padding: 0.5rem;
                  font-size: 0.70rem;
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
                      font-size: 0.90rem;
                      text-align: left;
                      padding: 0;
                   }
                          
                  // XX-Large devices (larger desktops, 1400px and up)
                  @media (min-width: 1400px) {  }
                  `}
            >
                <p>With an exceptional recommendation score by our trusted clients, Webanah is an extremely trustworthy choice for our clients to reach out for their social media management needs. Should you choose to avail of our services, we ensure that the company will help you improve your brand's awareness, revenue, customer loyalty, and more. More than 70% of customers resort to social media while purchasing through an online business. Whether you are familiar with your target audience and their demographics, our team of social media managers will take care of every aspect of your content and lead your strategy with an optimistic approach.</p>
                <p>You will be provided an expert social media accountant who would not only handle the posting but also research to find out and design attractive content for your account with our expert designers. And also design a customized social media strategy that would elevate your presence at the platforms. Reach out to us if you want Webanah churn your social media and extract out the best from it.</p>
            </div>
        </div>
        <div
            css={css`
              // X-Small devices (portrait phones, less than 576px)
              padding: 0 10%;
              /* margin-bottom: -5rem; */
              grid-row: 1 / 2;
              z-index: -1;
              align-self: end;
              justify-self: center;

              /* @media (max-width: 320px) { 
                  align-self: center;
               } */

              // Small devices (landscape phones, 576px and up)
              @media (min-width: 576px) { 
                  padding: 0 25%;
               }
                          
              // Medium devices (tablets, 768px and up)
              @media (min-width: 768px) { 
                  padding: 0 30%;
               }
                      
              // Large devices (desktops, 992px and up)
              @media (min-width: 992px) {  }
                      
              // X-Large devices (large desktops, 1200px and up)
              @media (min-width: 1200px) { 
                  grid-column: 2 / 3;
                  align-self: center;
                  padding: 0 10%;
                  margin-bottom: 0;
               }
                      
              // XX-Large devices (larger desktops, 1400px and up)
              @media (min-width: 1400px) {  }

              display: flex;
              flex-direction: column;
              align-items: center;

              `}>
            <div
                css={css`
                  /* padding: 0 5%; */
                  justify-self: center;
                  display: grid;
                  grid-template-columns: repeat(6, minmax(40px, 60px));
                  grid-template-rows: repeat(2, 60px);
                  align-items: center;
                  justify-items: center;
                  margin-bottom: -5rem;
                  /* position: relative; */
                  /* background: center/contain no-repeat url('/images/social-media-management-bg.png'); */
            `}
            >
                <div
                    css={css`
                      /* margin-bottom: -10rem; */
                      position: relative;
                      width: 100px;
                      height: 100px;
                      grid-row: 2 / 3;
                      grid-column: 1 / 2;
                      animation: move_s 1s linear infinite;
                      animation-direction: alternate;
                      @keyframes move_s {
                          0% {
                              transform: translate(0px, 0%);
                          }
                          100% {
                              transform: translate(0px, -8%);
                          }
                      }
                  `}>
                    <Image
                        src="/images/Skype.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div
                    css={css`
                      position: relative;
                      width: 100px;
                      height: 100px;
                      grid-row: 1 / 2;
                      grid-column: 2 / 3;

                      animation: move_yt 1s linear infinite;
                      animation-direction: alternate;
                      @keyframes move_yt {
                          0% {
                              transform: translate(0px, 0%);
                          }
                          100% {
                              transform: translate(0px, -8%);
                          }
                      }
                      `}>
                    <Image
                        src="/images/Youtube.png"
                        layout="fill"
                        objectFit="cover"
                    // width={185 * 3}
                    // height={185 * 3}
                    />
                </div>
                <div
                    css={css`
                      position: relative;
                      width: 100px;
                      height: 100px;
                      grid-row: 1 / 2;
                      grid-column: 3 / 4;
                      margin-left: 2rem;

                      animation: move_fb 1s linear infinite;
                      animation-direction: alternate;
                      @keyframes move_fb {
                          0% {
                              transform: translate(0px, 0%);
                          }
                          100% {
                              transform: translate(0px, 8%);
                          }
                      }
                `}>
                    <Image
                        src="/images/Facebook.png"
                        layout="fill"
                        objectFit="cover"
                    // width={186 * 3}
                    // height={186 * 3}
                    />
                </div>
                <div
                    css={css`
                      /* margin-bottom: -10rem; */
                      position: relative;
                      width: 100px;
                      height: 100px;
                      grid-row: 2 / 3;
                      grid-column: 4 / 5;
                      
                      animation: move_sc 1s linear infinite;
                      animation-direction: alternate;
                      @keyframes move_sc {
                          0% {
                              transform: translate(0px, 0%);
                          }
                          100% {
                              transform: translate(0px, 8%);
                          }
                      }
                      `}>
                    <Image
                        src="/images/Snapchat.png"
                        layout="fill"
                        objectFit="cover"
                    // width={181 * 3}
                    // height={181 * 3}
                    />
                </div>
                <div
                    css={css`
                      position: relative;
                      width: 100px;
                      height: 100px;
                      grid-row: 1 / 2;
                      grid-column: 5 / 6;

                      animation: move_wa 1s linear infinite;
                      animation-direction: alternate;
                      @keyframes move_wa {
                          0% {
                              transform: translate(0px, 0%);
                          }
                          100% {
                              transform: translate(0px, -8%);
                          }
                      }
                      `}>
                    <Image
                        src="/images/Whatsapp.png"
                        layout="fill"
                        objectFit="cover"
                    // width={197 * 3}
                    // height={197 * 3}
                    />
                </div>
                <div
                    css={css`
                      /* margin-bottom: -10rem; */
                      position: relative;
                      width: 100px;
                      height: 100px;
                      grid-row: 2 / 3;
                      grid-column: 6 / 7;

                      animation: move_t 1s linear infinite;
                      animation-direction: alternate;
                      @keyframes move_t {
                          0% {
                              transform: translate(0px, 0%);
                          }
                          100% {
                              transform: translate(0px, -8%);
                          }
                      }
                      `}>
                    <Image
                        src="/images/Twitter.png"
                        layout="fill"
                        objectFit="cover"
                    // width={186 * 3}
                    // height={186 * 3}
                    />
                </div>
            </div>
            <div
                css={css`
                  /* padding: 0 5%; */
                  `}>
                <Image
                    src="/images/social-media-management-bg.png"
                    layout="intrinsic"
                    width={679}
                    height={453}
                />
            </div>
        </div>

    </div>
)

export default SocialMediaManagement
