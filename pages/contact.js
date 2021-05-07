/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import { useState, useRef } from "react"
import Head from "next/head"
import { Scrolls } from "../src/components/Sub-Components/scrollbars"
import Image from "next/image"
import { Phone, MapMarkerAlt, Envelope } from "@emotion-icons/fa-solid"
import { Button } from "../src/components/Sub-Components/button"
import Layout from "../src/components/Main-Components/Layout"

const Contact = () => (
    <>
        <Head>
            <title>Contact Us</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/images/Webanah_logo.png" type="image/png"></link>
        </Head>
        <Scrolls total={7} current={6} sectionTitles={['', '', '', '', '', '', 'CONTACT US']} />
        <Layout backgroundimage='/images/background1.png'>
            <div
                css={css`
                    margin-top: 6rem;
                    padding-bottom: 2rem;
                    /* display: flex; */
                    flex-direction: column;
                    @media (min-width: 576px) {
                        padding: 2rem 1rem;
                        /* padding-top: 5rem; */
                    }
                    @media (min-width: 768px) {
                        padding: 2rem 2rem;
                        /* padding-top: 5rem; */
                    }
                    @media (min-width: 992px) {
                        padding: 1rem 5rem;
                        /* padding-top: 5rem; */
                    }
                    @media (min-width: 1200px) {
                        padding: 3rem 10rem;
                        flex-direction: row;
                        position: relative;
                    }
                  `}>
                <div
                    css={css`
                      font-family: 'Green Lantern';
                      color: #16f533;
                      font-size: clamp(1.5rem, -0.875rem + 8.333vw, 1.75rem);
                      letter-spacing: 0.5rem;
                      color: transparent;
                      -webkit-text-stroke: 0.06rem #16f533;
                      text-align: center;
                      /* writing-mode: vertical-rl;
                      text-orientation: upright; */
                      @media (min-width: 1200px) {
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          margin-bottom: 150px;
                          margin-left: 120px;
                          transform: rotate(270deg);
                          transform-origin: 0 0;
                      }
                  `}
                >
                    CONTACT US
                </div>
                <Form />
            </div>
        </Layout>
    </>
)

function Form() {
    const [respCode, setRespCode] = useState(null)
    const formRef = useRef()
    const onSubmit = async event => {
        event.preventDefault()
        const res = await fetch('/api/contact', {
            body: JSON.stringify({
                first_name: event.target.firstName.value,
                last_name: event.target.lastName.value,
                email: event.target.email.value,
                subject: event.target.subject.value,
                message: event.target.message.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        if (res.status == 201) {
            console.log("created successfully")
            formRef.current.reset()
            setRespCode(201)
        } else if (res.status == 409) {
            console.log("Conflict")
            setRespCode(409)
        }

        const result = await res.json()
        // result.user => 'Ada Lovelace'

        console.log(result)

        // console.log(
        //     JSON.stringify({
        //         firstName: event.target.firstName.value,
        //         lastName: event.target.lastName.value,
        //         email: event.target.email.value,
        //         subject: event.target.subject.value,
        //         message: event.target.message.value,
        //     })
        // )
    }

    return (
        <>
            <div
                css={css`
                  text-align: center;
                  /* margin: 0.5rem 0; */
                  `}
            >
                {(respCode == 201 && <div
                    css={css`
                      /* display: inline; */
                      color: white;
                      font-weight: bold;
                      border: 0.05rem solid #16f533;
                      margin: 0.5rem auto;
                      padding: 0.5rem;
                      border-radius: 0.5rem;
                      width: 14rem;
                    `}
                >
                    Form Submitted Successfully.</div>) ||
                    (respCode == 409 && <div
                        css={css`
                          /* display: inline; */
                          color: white;
                          font-weight: bold;
                          border: 0.05rem solid red;
                          margin: 0.5rem auto;
                          padding: 0.5rem;
                          border-radius: 0.5rem;
                          width: 10rem;
                    `}
                    >
                        Email Aready Exists.</div>)
                    || null}
            </div>
            <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr;
                  @media (min-width: 768px) {
                      grid-template-columns: 1fr 1fr;
                  }
                  @media (min-width: 1200px) {
                      grid-template-columns: 1fr 1fr 1fr;
                  }
                  grid-gap: 1rem;
                  padding: 0 0.5rem;
                  /* margin-bottom: 1rem; */`}>
                <form onSubmit={onSubmit}
                    ref={formRef}
                    css={css`
                      position: relative;
                      z-index: 1;
                      padding: 1rem;
                      display: grid;
                      grid-column: 1 / 3;
                      grid-row: 1 / 2;
                      grid-gap: 0.5rem;
                      grid-template-columns: 1fr;
                      @media (min-width: 992px) {
                          grid-template-columns: 1fr 1fr;
                      }
                      & > div {
                      display: flex;
                      flex-direction: column;
                  & > label {
                      /* font-family: 'Green Lantern'; */
                      /* font-style: oblique 40deg; */
                      color: #16f533;
                      /* letter-spacing: 0.1rem; */
                      /* padding-top: 0.5rem; */
                  }
                  & > textarea {
                      background: transparent;
                      border: 0.1rem solid lightgray;
                      padding: 0.5rem;
                      resize: none;
                      border-radius: 0.2rem;
                      margin-bottom: 0.5rem;

                      &::placeholder {
                          color: lightgray;
                      }
                      &:focus {
                          border-color: #16f533;
                          outline: none;
                      }
                      color: white;
                  }
                  & > input {
                      background: transparent;
                      padding: 0.5rem;
                      border: 0.1rem solid lightgray;
                      border-radius: 0.2rem;
                      margin-top: 0.1rem;
                      &::placeholder {
                          color: lightgray;
                      }
                      &:focus {
                          border-color: #16f533;
                          outline: none;
                      }
                      color: white;
                  }
                  }
              `}>
                    <div
                        css={css`
                          width: 100%;
                          height: 100%;
                          position: absolute;
                          z-index: -1;
                          background: #294E4C;
                          opacity: 0.6;
                          border: 0.1rem solid #46CF6E;
                          border-radius: 0.2rem;
                          `}></div>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" name="firstName" type="text" placeholder="John" autoComplete="name" required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" name="lastName" type="text" placeholder="Doe" autoComplete="name" required />
                    </div>
                    <div
                        css={css`
                  @media (min-width: 992px) {
                      grid-column: 1 / 3;
                  }
                  `}>
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="johndoe@gmail.com" autoComplete="email" required />
                    </div>
                    <div
                        css={css`
                  @media (min-width: 992px) {
                      grid-column: 1 / 3;
                  }
                  `}>
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" name="subject" type="text" placeholder="I have a question about..." required />
                    </div>
                    <div
                        css={css`
                  @media (min-width: 992px) {
                      grid-column: 1 / 3;
                      /* grid-row: 4 / 5; */
                  }
                  `}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" type="text" placeholder="Details..."
                            rows={7} required />
                        <div
                            css={css`
                      text-align: center;
                      `}>
                            <Button
                                css={css`
                                  padding: 0.5rem 2rem;
                                  /* margin-bottom: 1rem; */
                                  @media (min-width: 1200px) {
                                      margin-bottom: 0;
                                  }
                          `} type="submit" primary>Submit</Button>
                        </div>
                    </div>
                </form>
                <div
                    css={css`
                      @media (min-width: 1200px) {
                        grid-column: 3 / 4;
                        grid-row: 1 / 3;
                      }`}>
                    <div
                        css={css`
                      display: none;
                      @media (min-width: 1200px) {
                        display: block;
                        padding: 0 10%;
                        align-self: center;
                      }
                      @media (min-width: 1400px) {
                          padding: 0 20%;
                      }
                      `}>
                        <Image
                            src="/images/webanah-character6.png"
                            layout="intrinsic"
                            width={576}
                            height={925}
                        />
                    </div>
                </div>
                <div
                    css={css`
                      gap: 2rem;
                      grid-column: 1 / 3;
                      grid-row: 2 / 3;
                      @media (min-width: 768px) {
                      }
                      @media (min-width: 1200px) {
                        /* padding-top: 2rem; */
                        align-self: center;
                      }`}>
                    <div
                        css={css`
                          position: relative;
                          z-index: 1;
                          display: flex;
                          gap: 1rem;
                          /* margin-top: 1rem; */
                          margin-bottom: 1rem;
                          flex-direction: column;
                          @media (min-width: 1200px) {
                            flex-direction: row;
                          }
                          justify-content: space-between;
                          align-items: center;
                          font-size: 0.9rem;
                          /* background: #294E4C; */
                          /* opacity: 0.5; */
                          padding: 0.25rem 0;
                          & > div {
                          text-align: center;
                          /* border: 0.05rem solid grey; */
                          flex: 1;
                            > div {
                                padding-top: 0.25rem;
                            }
                          &:hover {
                              /* border: 0.05rem solid #16f533; */
                          }
                          div:nth-of-type(2) {
                            /* font-family: 'Green Lantern'; */
                            color: #16f533;
                            letter-spacing: 0.1rem;
                          }
                          div:nth-of-type(3) {
                              letter-spacing: 0.1rem;
                          }
                              }`
                        }
                    >
                        <div
                            css={css`
                              width: 100%;
                              height: 100%;
                              position: absolute;
                              z-index: -1;
                              background: #294E4C;
                              opacity: 0.6;
                              border: 0.1rem solid #46CF6E;
                              border-radius: 0.2rem;
                          `}></div>
                        <div>
                            <div>
                                <Phone size="24" />
                            </div>
                            <div>Phone</div>
                            <div>0321-1234567</div>
                        </div>
                        <div>
                            <div>
                                <MapMarkerAlt size="24" />
                            </div>
                            <div>Location</div>
                            <div>cursus in hac habitasse platea dictumst</div>
                        </div>
                        <div>
                            <div>
                                <Envelope size="24" />
                            </div>
                            <div>Email</div>
                            <div>webanah@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ContactData = () => (
    <div
        css={css`
          display: grid;
          grid-gap: 0.5rem;
          align-content: space-around;
          & > div {
              padding: 0.5rem;
              text-align: center;
              border: 0.05rem solid grey;
              border-radius: 1rem;
              div:nth-of-type(2) {
                  font-family: 'Green Lantern';
                  color: #16f533;
              }
              & > div {
                  padding: 0.5rem;
              }
          }`}>
        <div>
            <Phone size="24" />
            <div>Phone</div>
            <div>0321-1234567</div>
        </div>
        <div>
            <MapMarkerAlt size="24" />
            <div>Location</div>
            <div>magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque</div>
        </div>
        <div>
            <Envelope size="24" />
            <div>Email</div>
            <div>webanah@gmail.com</div>
        </div>
    </div>
)

export default Contact