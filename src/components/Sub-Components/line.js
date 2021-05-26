/** @jsx jsx */

import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

export const LeftLine = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 0.1rem solid grey; */
  /* padding: 0.1rem; */
  /* max-width: max-content; */
  z-index: 1;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: row;
  width: 70%;
  @media (max-width: 991.98px) {
    display: none;
  }
  @media (min-width: 1200px) {
    top: 25%;
    left: 3%;
    transform: none;
    flex-direction: column;
    height: 40%;
    width: auto;
  }
`

export const LeftItem = styled.div`
  /* padding: 0.1rem; */
  width: ${props => 100 / props.total}%;
  @media (min-width: 1200px) {
    width: auto;
    height: ${props => 100 / props.total}%;
  }
  border: 0.01rem solid whitesmoke;
  ${props => props.active && css`
  border: 0.01rem solid #16f533;` }
`

export const styledText = styled.div`
  color: whitesmoke;
  font-size: 0.75rem;
  /* writing-mode: horizontal-tb; */
  text-orientation: mixed;
  padding: 0 0.5rem;
  @media (min-width: 1200px) {
    transform: rotate(-90deg);
    padding: 0.5rem 0;
  }
`

export const BottomLine = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  /* border: 0.1rem solid grey; */
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 90vw;
  justify-content: space-evenly;
  @media (max-width: 991.98px) {
    display: none;
  }
  @media (min-width: 1200px) {
    width: 80vw;
    justify-content: space-between;
  }
`

export const Circle = styled.div`
  position: relative;
  /* Code for the vertical green line displaying on the top of active section's glowing circle */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 2px;
    height: 10px;
    margin-top: -10px;
    margin-left: 1px;
    background-color: #16f533;
    display: none;
    ${props => props.active && css`
      display: block;
      `}
  }
  
  /* Code for title on the top of green line displaying on the top of active section's glowing circle */
  &:after {
    content: '${props => props.title}';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 0.5rem;
    margin: 0 -4rem;
    margin-top: -1.5rem;
    text-align: center;
    display: none;
    ${props => props.active && css`
      display: block;
      filter: drop-shadow(0 0 0 #000d23);
      `}
  }

  width: 0.1rem;
  height: 0.1rem;
  padding: 0.1rem;
  border-radius: 50%;
  filter: drop-shadow(0 0 0.2rem #16f533);
  border: 0.1rem solid grey;
  background: #000d23;
  ${props => props.active && css`
  border: 0.1rem solid #16f533;
  background: #16f533;
  `}
`

// export const BottomVerticalLine = styled.div`
//   height: 0.5rem;
//   width: 0.1px;
//   margin-bottom: 0.5rem;
//   border: 0.1rem solid transparent;
//   background: transparent;
//   ${props => props.active && css`
//   filter: drop-shadow(0 0 0.2rem #16f533);
//   border: 0.1rem solid #16f533;
//   background: #16f533;
//   `}
// `

export const SectionTitle = styled.div`
  color: white;
  font-size: 0.5rem;
  margin: 0 -4rem;
  text-align: center;
  margin-top: -1.5rem;
  display: none;
  ${props => props.active && css`
  filter: drop-shadow(0 0 0 none);
  display: block;
  `}
`

export const RightLine = styled.div`
  position: fixed;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  /* border: 0.1rem solid grey; */
  padding: 0.1rem;
  /* max-width: max-content; */
  right: 3%;
  z-index: 1;
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    top: 25%;
  }
`

export const RightItem = styled.div`
  width: 0.15rem;
  height: 0.15rem;
  /* padding: 0.5rem; */
  border: 0.1rem solid #16f533;
  background: #000d23;
  transform: rotate(45deg);
`

export const Square = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  /* background: #000d23; */
  border-radius: 0.12rem;
  transform: rotate(45deg);
  border: 0.12rem solid whitesmoke;
  ${props => props.active && css`
  border: 0.15rem solid #16f533;
  `}
`

export const Line = styled.div`
  position: absolute;
  z-index: -1;
  border: 0.001rem solid grey;
  filter: drop-shadow(0 0 0.5rem grey);
  width: 75vw;
  @media (max-width: 1200px) {
    width: 65vw;
  }
  left: 50%;
  transform: translateX(-50%);
`

export const SocialLine = styled.div`
  position: fixed;
  bottom: 3%;
  left: 3%;
  height: 20%;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  display: none;
  @media (min-width: 1200px) {
    display: flex;
  }
`