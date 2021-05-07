/** @jsx jsx */

import { jsx, css } from "@emotion/react"
import Image from "next/image"

const base = css`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: 1fr;
  padding: 0 0.25rem;
  @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 1rem 0.25rem;
  }

  & > div {
      border: 0.01rem solid grey;
      border-radius: 0.25rem;
      background-image: url('/images/core-value-bg.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      @media (min-width: 768px) {
        padding: 0.5rem 0.25rem;
      }
      @media (min-width: 1200px) {
        padding: 2rem 0.25rem;
      }
      border-left: 0.1rem solid grey;
      border-right: 0.1rem solid grey;
      &:hover {
        color: #f8f8ff;
        border-left: 0.1rem solid #16f533;
        border-right: 0.1rem solid #16f533;
      }
      & > div {
          @media (min-width: 992px) {
              padding: 0.25rem;
          }
      }
      & > div:nth-of-type(1) {
          font-family: 'Green Lantern';
          font-size: clamp(0.7rem, -0.875rem + 8.333vw, 1.75rem);
          letter-spacing: 0.1rem;
          color: #16f533;
          /* opacity: 0.75; */
          text-align: center;
      }
      & > div:nth-of-type(2) {
          font-size: 0.8rem;
          @media (min-width: 992px) {
              font-size: 0.9rem;
              padding: 0.25;
          }
          @media (min-width: 1200px) {  }
      }
  }
`

const OurCoreValues = () => (
    <div
        css={css`
          margin-top: 7rem;
          @media (min-width: 768px) {
              /* margin-top: 5rem; */
              padding: 1rem;
          }
          @media (min-width: 992px) {
              margin-top: 7.5rem;
          }
          @media (min-width: 1200px) {
              /* margin-top: 30vh; */
              padding: 1rem 0;
          }
          `}>
        <div
            css={css`
              font-family: 'Green Lantern';
              font-size: clamp(1rem, -0.875rem + 8.333vw, 2.75rem);
              text-align: center;
              color: transparent;
              -webkit-text-stroke: 0.06rem #16f533;
              letter-spacing: 0.25rem;

              margin-bottom: 0.25rem;
              `}
        >
            Our Core Values
        </div>
        <div
            css={base}
        >
            <div>
                <div>
                    Dedication
                </div>
                <div>Webanah’s team is under a spell of our core values and the first feature of these values is dedication. Every member of the team is highly trained to value every single detail and demand that customers have, curate strategies according to their demands, and consult with them with responsive and beneficial idea implementation. </div>
            </div>
            <div>
                <div>
                    Transparency
                </div>
                <div>Each and every step of our work is kept completely transparent in terms of price, strategies, research process, and implementation. There are no hidden costs or invisible activities. Every source, performance, information used is legit and shared with our clients to have them connected to us with trust. </div>
            </div>
            <div>
                <div>Loyality</div>
                <div>You build honest connections that gain our loyalty over time. The longer you stay connected with us, the more loyalty perks you enjoy. We believe in building strong relation with clients because loyalty doesn’t mean having a client for future business but also having an opportunity for growth for both the parties. </div>
            </div>
        </div>
    </div>
)

export default OurCoreValues