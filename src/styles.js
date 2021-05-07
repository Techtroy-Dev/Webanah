import { css, Global, keyframes } from "@emotion/react"
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: 'Green Lantern';
        src: url('/fonts/GREEN_LANTERN_MOVIE[1].ttf') format('truetype');
      }
      html,
      body {
        /* padding: 3rem 1rem; */
        color: white;
        box-sizing: border-box;
        margin: 0;
        background: #000d23;
        min-height: 100%;
        font-family: 'Raleway', Helvetica, Arial, sans-serif;
        font-size: 16px;
        overflow-x: hidden;
      }
      body::-webkit-scrollbar {
        width: 0.5rem;
      }
      body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: slategrey;
      }
      body::-webkit-scrollbar-thumb {
        border-radius: 2rem;
        background-color: #16f533;
        outline: 1px solid slategrey;
      }
      a {
        text-decoration: none;
        color: white;
      }
      a:hover {
        text-decoration: underline;
      }
    `}
  />
)

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`

export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

export const Basic = styled.div`
  ${basicStyles};
`

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`
export const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`
