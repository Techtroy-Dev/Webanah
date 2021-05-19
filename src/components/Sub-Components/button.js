/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import styled from '@emotion/styled'

export const Button = styled.button`
  background: transparent; 
  color: #16f533;
  /* text-transform: uppercase; */
  font-style: italic;
  font-weight: bolder;
  font-size: 0.75rem;
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
  color: #000d23;
  border: 1px solid #16f533;
  ${'' /* opacity: 0.7; */}
  filter: none;
  `}
`