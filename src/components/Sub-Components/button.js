/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from '@emotion/styled'

export const Button = styled.button`
  background: transparent; 
  color: #16f533;
  /* text-transform: uppercase; */
  font-style: italic;
  font-weight: bolder;
  font-size: 1rem;
  padding: 7px;
  border-radius: 0px 10px;
  border: 1.5px solid #16f533;
  transform: skew(-20deg);
  opacity: 0.9;
  filter: drop-shadow(0 0 0.5rem #16f533);
  /* filter: drop-shadow(0 0 0.2rem white); */
  &:hover {
    filter: drop-shadow(0 0 0.5rem white);
  }

  & > div {
    transform: skew(20deg);
  }
  
  ${props => props.primary && css`
  background: #16f533;
  font-weight: bold;
  color: black;
  border: 1px solid #16f533;
  ${'' /* opacity: 0.7; */}
  filter: none;
  ${'' /* background: rgb(0,0,0);
background: linear-gradient(344deg, rgba(0,0,0,1) 0%, rgba(22,245,51,1) 44%); */}
${'' /* background: #16f533; */}
${'' /* box-shadow: inset 28px 28px 56px #12c429,
            inset -28px -28px 56px #1aff3d,
            inset 28px 28px 56px #000; */}
  `}
`