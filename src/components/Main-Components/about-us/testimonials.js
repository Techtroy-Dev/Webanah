/** @jsx jsx */

import { jsx, css } from "@emotion/react"
import Image from "next/image"

const base = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  grid-auto-rows: min-content;
  padding: 5rem;
  margin-bottom: 4rem;
  color: lightgrey;
  > div {
      border: 0.01rem solid grey;
      border-radius: 1rem;
      &:hover {
        color: #f8f8ff;
        border: 0.01rem solid #16f533;
      }
      > div {
          padding: 1.5rem;
      }
  }
`

const Post = () => (
    <div>
        <div
            css={css`
              font-family: 'Green Lantern';
              font-size: clamp(1.5rem, -0.875rem + 8.333vw, 3.75rem);
              text-align: center;
              color: #16f533;`}>Testimonials</div>
        <div
            css={base}>
            <div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      font-size: 1rem;
                      text-align: center;
                      color: #16f533;`}>Heading</div>
                <div>Description</div>
                <div>Company Logo</div>
            </div>
            <div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      font-size: 1rem;
                      text-align: center;
                      color: #16f533;`}>Heading</div>
                <div>Description</div>
                <div>Company Logo</div>
            </div>
            <div>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      font-size: 1rem;
                      text-align: center;
                      color: #16f533;`}>Heading</div>
                <div>Description</div>
                <div>Company Logo</div>
            </div>
        </div>
    </div>
)

export { Post }