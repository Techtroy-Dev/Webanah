/** @jsx jsx */

import { jsx, css } from "@emotion/react"
import Link from "next/link"
import { Button } from "../../Sub-Components/button"

const LetsWorkTogether = () => (
    <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
    `}>
        <div
            css={css`
          text-align: center;
          `}
        >
            <div
                css={css`
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1rem, -0.875rem + 8.333vw, 2.75rem);
                  letter-spacing: 0.1rem;
                  opacity: 0.75;
              `}
            >
                TRAPPED IN THE UNIVERSE OF COMPETITERS?
            </div>
            <div
                css={css`
                  padding: 1rem 0.25rem;
                  font-size: 0.8rem;
                  @media (min-width: 1200px) {
                      padding: 1rem 5rem 2rem;
                      font-size: 0.9rem;
                  }
              `}
            >
                Is your business not growing online? Are you worried about your business website's performance on search engines? Or your website is not generating any traffic? Well, you might need a bunch of updated strategies for your website to work well online. Webanah is your magical rescue that converts the audience to your website in a snap. With our exceptional digital marketing services like web development, content marketing, SEO, branding and design, social media marketing, app development, and consulting, we can increase the audience engagement on your website.
        </div>

            <Link href="/contact">
                <a>
                    <Button
                        css={css`
                          color: white;
              `}
                    >
                        Let's do this
                    </Button>
                </a>
            </Link>
        </div>
    </div>
)

export default LetsWorkTogether