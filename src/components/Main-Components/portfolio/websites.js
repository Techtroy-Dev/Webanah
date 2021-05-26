/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react';
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"
import { SearchPlus } from '@emotion-icons/fa-solid'

/* application of flexbox start */

const flexContainer = css`
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 0rem;
  ${'' /* height: 80vh; */}
  ${'' /* margin-top: 2.375rem; */}
  text-align: center;
  ${'' /* margin-left: 5%;
  margin-right: 5%; */}
  font-family: Green Lantern;
  @media (min-width: 768px) {
      gap: 0.5rem;
      ${'' /* margin-left: 10%;
      margin-right: 10%; */}
  }
  @media (min-width: 1200px) {
      align-items: start;
      gap: 0.5rem;
      ${'' /* margin-left: 12%;
      margin-right: 12%; */}
      ${'' /* height: 80vh; */}
  }
`

const flexItem = css`
  text-align: center;
  position: relative;
  ${'' /* margin-bottom: 1.875rem; */}
  flex: 1 0 80%;
  @media (min-width: 768px) {
      ${'' /* margin-right: 1.125rem; */}
      flex: 1;
  }
  @media (min-width: 1200px) {
      /*margin-right: 1.125rem;*/
      ${'' /* margin-left: 4%; */}
      ${'' /* margin-right: 4%; */}
  }`

/* application of flexbox end */

const MagnifyingGlassIcon = styled(SearchPlus)`
  color: white;
  height: 1.5625rem;
  width: 1.5625rem;
  position: absolute;
  top: 43%;
  right: 45%;
  left: 45%;
  @media (max-width: 768px) {
      height: 1.75rem;
      width: 1.75rem;
      right: 48%;
      left: 48%;
  }
  /*border: 1px solid green;*/
  `

const flexContainerN = css`
  /*border: 1px solid black;*/
  display: flex;
  flex-flow: column nowrap;
  ${'' /* margin-top: 2.375rem; */}
  margin-bottom: 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
  flex-flow: row nowrap;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  }
  @media (min-width: 1200px) {
  margin-left: 12%;
  margin-right: 12%;
  }
  `

const flexItemN = css`
  position: relative;
   /*border: 1px solid white;*/
   /*margin-right: 0.625rem;*/
  @media (min-width: 768px) {
      margin-right: 0.625rem;
  }
  @media (min-width: 1200px) {
      margin-right: 0.625rem;
  }
  `

const Div = styled.div`
  /*border: 1px solid red;*/
  /* margin-bottom: 1.875rem;  */
  
  @media (min-width: 768px) {
  /*margin-right: 0.625rem;*/
  
  /*margin-right: ${props => props.count === '5' ? '20px' : '0625rem'};
  margin-left: ${props => props.count === '4' ? '70px' : '0px'};*/
  }
  @media (min-width: 1200px) {
  /*margin-right: 0.625rem;*/
  }
                        `
const img = css`
  &:hover {
      opacity: 0.5;
      }
      `


function Websites(props) {
    /*const [isShown, setIsShown] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    });
*/
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);

    return (
        <div
            css={css`
              /* height: 100vh; */
              /* margin-top: 5rem; */
              /* height: 93.75rem; */
              @media (max-width: 768px) {
                  /* height: 196.875rem; */
                  }
              /*border: 1px solid black;*/
        `}>

            <div
                css={css`
                  text-align: center;
                  font-family: 'Green Lantern';
                  color: #16f533;
                  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.75rem);
                  opacity: 0.75;
                  letter-spacing: 0.5rem;
                  color: transparent;
                  -webkit-text-stroke: 0.06rem #16f533;
                  padding: 0.25rem;
                  margin-bottom: 5vh;

                  @media (max-width: 1280px){
                    /* margin-top: 15vh;
                    margin-bottom: 8vh; */
                  }
              `}>
                WEBSITES
            </div>

            <div css={flexContainer}>
                <div css={flexItem}
                /*onMouseEnter={() => setIsShown({...isShown, one:true})}
                onMouseLeave={() => setIsShown({...isShown, one:false})}*/
                >
                    <Div
                        onMouseEnter={() => setIsShown1(true)}
                        onMouseLeave={() => setIsShown1(false)}
                        count='1'>
                        <Image css={img} src="/images/bs-web.png" alt="Burgers & Shakes" width={306} height={494} />
                    </Div>
                    {isShown1 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem}
                /*onMouseEnter={() => setIsShown({...isShown, two:true})}
                onMouseLeave={() => setIsShown({...isShown, two:false})}*/

                >
                    <Div count='2'
                        onMouseEnter={() => setIsShown2(true)}
                        onMouseLeave={() => setIsShown2(false)}>
                        <Image css={img} src="/images/heed-web.png" alt="Heed" width={304} height={496} />
                    </Div>
                    {isShown2 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem}
                /*onMouseEnter={() => setIsShown({...isShown, three:true})}
                onMouseLeave={() => setIsShown({...isShown, three:false})}*/

                >
                    <Div count='3'
                        onMouseEnter={() => setIsShown3(true)}
                        onMouseLeave={() => setIsShown3(false)}>
                        <Image css={img} src="/images/royal-web.png" alt="Royal" width={303} height={494} />
                    </Div>
                    {isShown3 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem}
                /*onMouseEnter={() => setIsShown({...isShown, four:true})}
                onMouseLeave={() => setIsShown({...isShown, four:false})}*/
                >

                    <Div count='4'
                        onMouseEnter={() => setIsShown4(true)}
                        onMouseLeave={() => setIsShown4(false)}>
                        <Image css={img} src="/images/st-web.png" alt="Sell and tell" width={304} height={495} />
                    </Div>
                    {isShown4 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem}
                /*onMouseEnter={() => setIsShown({...isShown, five:true})}
                onMouseLeave={() => setIsShown({...isShown, five:false})}*/
                >
                    <Div count='5'
                        onMouseEnter={() => setIsShown5(true)}
                        onMouseLeave={() => setIsShown5(false)}>
                        <Image css={img} src="/images/techtory-web.png" alt="Techtory" width={304} height={496} />
                    </Div>
                    {isShown5 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>
            </div>

        </div>

    );
}

export default Websites;
