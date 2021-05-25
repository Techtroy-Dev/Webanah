/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from '@emotion/styled'
import { FacebookF, Twitter, LinkedinIn, Instagram } from '@emotion-icons/fa-brands'
import { useRef, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import useOnClickOutside from "../../utils/use-onclickoutside"

export const Sidebar = (props) => {

  // Create a ref that we add to the element for which we want to detect outside clicks
  const node = useRef();
  // State for our sidebar
  const [open, setOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(node, () => setOpen(false));

  const { pathname } = useRouter();
  // console.log('pathname', pathname);

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu pathname={pathname} open={open} setOpen={setOpen} />
    </div>
  )
}

const base = css`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
  `

export const StyledBurger = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 4;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'white' : 'white'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #000d23;
  height: 100vh;
  @media (max-width: 768px) {
    height: 90vh;
  }
  text-align: left;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  div {
    /* padding: 1rem 0; */
  }
  a {
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #16f533;
    }
  }
  z-index: 3;
`;

const selected = css`
  color: #16f533;
  filter: drop-shadow(0px 0px 10px green);
   > a {
    color: #16f533!important;
    filter: drop-shadow(0px 0px 10px green);
  }

  &::before {
    ${'' /* content: "/ "; */}
  }
  &::after {
    ${'' /* content: " /" */}
  }
`


const Menu = ({ open, pathname }) => {
  return (
    <StyledMenu open={open}>
      <div>
        <Link href="/">
          <a>
            <Image
              src="/images/Webanah_logo.png"
              width={149 * 0.5}
              height={135 * 0.5}
              layout="fixed"
            />
          </a>
        </Link>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          text-align: center;
          height: 50%;
          `}>
        <div
          css={css`
            ${(pathname == "/") && selected}
            `}
        ><Link href="/"><a>Home</a></Link></div>
        <div
          css={css`
            ${(pathname == "/about") && selected}
            `}
        ><Link href="/about"><a>About Us</a></Link></div>
        <div
          css={css`
            ${(pathname == "/services") && selected}
            `}
        ><Link href="/services"><a>Services</a></Link></div>
        <div
          css={css`
            ${(pathname == "/portfolio") && selected}
            `}
        ><Link href="/portfolio"><a>Portfolio</a></Link></div>
        <div
          css={css`
            ${(pathname == "/case-studies") && selected}
            `}
        ><Link href="/case-studies"><a>Case Studies</a></Link></div>
        <div
          css={css`
            ${(pathname == "/blogs") && selected}
            `}
        ><Link href="/blogs"><a>Blogs</a></Link></div>
        <div
          css={css`
            ${(pathname == "/contact") && selected}
            `}
        ><Link href="/contact"><a>Contact Us</a></Link></div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          justify-self: end;
          width: 100%;
            `}
      >
        <FacebookF css={base} size="16" />
        <Twitter css={base} size="16" />
        <LinkedinIn css={base} size="16" />
        <Instagram css={base} size="16" />
      </div>
    </StyledMenu>
  )
}