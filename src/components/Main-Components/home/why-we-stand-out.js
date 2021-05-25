/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Image from "next/image"
import styled from "@emotion/styled"

const base = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  padding-top: 0.75rem;
  
  @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
      grid-gap: 0.5rem;
  }
  
  @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      ${'' /* padding: 1rem; */}
  }
  ${'' /* color: lightgrey; */}
  ${'' /* margin-bottom: 4rem; */}
  > div {
      border: 0.01rem solid grey;
      ${'' /* text-align: center; */}
      border-radius: 0.25rem;
      background-image: url('/images/core-value-bg.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      ${'' /* padding: 2rem 0; */}
      border-left: 0.2rem solid grey;
      border-right: 0.2rem solid grey;
      &:hover {
        color: #f8f8ff;
        border-left: 0.2rem solid #16f533;
        border-right: 0.2rem solid #16f533;
      }
      > div {
          padding: 0.25rem;
      }
      > div:nth-of-type(-n+2) {
          text-align: center;
      }
      > div:nth-of-type(2) {
          font-family: 'Green Lantern';
          color: #16f533;
          ${'' /* font-size: 0.9rem; */}
          letter-spacing: 0.1rem;
      }
      > div:nth-of-type(3) {
          ${'' /* letter-spacing: 0.1rem; */}
          ${'' /* line-height: 1.4rem; */}
          ${'' /* font-size: 0.90rem; */}
          padding: 0.5rem 1rem;
          padding-top: 0;

      }
  }
`

const WhyWeStandOut = () => (
    <div
        css={css`
          /* padding-right: 10rem; */
          /* margin: 1rem 2rem; */
          /* margin-top: 8rem; */
          @media (min-width: 1200px) {
              /* margin: 0rem; */
              margin-top: 2.5rem;
              /* margin-left: -5rem; */
              /* margin-right: 5rem; */
  }
          `}>
        <div
            css={css`
              text-align: center;
              font-family: 'Green Lantern';
              color: transparent;
              -webkit-text-stroke: 0.06rem #16f533;
              font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.75rem);
              letter-spacing: 0.25rem;
              @media (min-width: 768px) {
                /* margin-bottom: 2rem; */
              }
              `}
        >
            WHY WE STAND OUT
        </div>

        <div css={base}>
            <div>
                <div>
                    <Image
                        src="/images/best-quality.png"
                        width={49}
                        height={56}
                    />
                </div>
                <div>
                    BEST QUALITY
                </div>
                <div>Our team never rests until the clients are satisfied with the work. We stand by our work and provide best possible outcomes for client’s business with limitless edits and claims according to their needs.</div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/guaranteed-results.png"
                        width={42}
                        height={57}
                    />
                </div>
                <div>
                    GUARANTEED RESULTS
                </div>
                <div>With our dynamic developing and marketing strategies that are curated keeping the brand image and target audience in mind, we strive to achieve successful outcomes.</div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/fast-response.png"
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    FAST RESPONSE
                </div>
                <div>Webanah considers clients its utmost priority hence, our team is always available to cater to our clients right away. </div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/excellent-design.png"
                        width={53}
                        height={50}
                    />
                </div>
                <div>
                    EXCELLENT DESIGN
                </div>
                <div>User experience is the eminent feature of your website that would either make or break your audience. Our team of experienced web designers makes sure to deliver an excellent yet user-friendly web design. </div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/perfect-solutions.png"
                        width={46}
                        height={56}
                    />
                </div>
                <div>
                    PERFECT SOLUTIONS
                </div>
                <div>Webanah is your savior of all your website design and its performance problems. Our skilled team provides efficient solutions and consultations to embark your brand on a unique identity journey. </div>
            </div>

            <div>
                <div>
                    <Image
                        src="/images/professional-consultancy.png"
                        width={44}
                        height={59}
                    />
                </div>
                <div>
                    PROFESSIONAL CONSULTANCY
                </div>
                <div>Apart from commendable designing and digital marketing services Webanah is always here to answer all your queries. Our experienced team has proficiency in business consultancy and assist specifically according to your brand and target market. </div>
            </div>

        </div>
    </div>
)

export default WhyWeStandOut