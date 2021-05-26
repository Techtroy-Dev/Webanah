/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react';
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"
import StyledModal from '../../Sub-Components/styled-modal'
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
      margin-right: 12%;
      height: 80vh; */}
  }`

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
  }`

const img = css`
  &:hover {
      opacity: 0.5;
      }
      `

function Branding(props) {
    /*const [isShown, setIsShown] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    });
*/
    const images = [
        <Image
            src="/images/branding/techtory-branding.jpg"
            layout="intrinsic"
            width={1920}
            height={11735}
        />,
        <Image
            src="/images/branding/edudemic-branding.jpg"
            layout="intrinsic"
            width={1920}
            height={20000}
        />,
        <Image
            src="/images/branding/bs-branding.jpg"
            layout="intrinsic"
            width={1920}
            height={26723}
        />,
        <Image
            src="/images/branding/heed-branding.jpg"
            layout="intrinsic"
            width={1920}
            height={9507}
        />,
        <Image
            src="/images/branding/royal-branding.jpg"
            layout="intrinsic"
            width={1920}
            height={8844}
        />
    ]
    const [currentModalImage, setCurrentModalImage] = useState(null);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    function closeModal() {
        setIsOpen(false);
    }

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
                BRANDING
            </div>

            <StyledModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
            >
                {images[currentModalImage]}
            </StyledModal>

            <div css={flexContainer}>
                <div css={flexItem} onClick={() => { setCurrentModalImage(0), openModal() }}
                /*onMouseEnter={() => setIsShown({...isShown, one:true})}
                onMouseLeave={() => setIsShown({...isShown, one:false})}*/
                >
                    <Div
                        onMouseEnter={() => setIsShown1(true)}
                        onMouseLeave={() => setIsShown1(false)}
                        count='1'>
                        <Image css={img} src="/images/techtory-brand.png" alt="Techtory" width={308} height={497} />
                    </Div>
                    {isShown1 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem} onClick={() => { setCurrentModalImage(1), openModal() }}
                /*onMouseEnter={() => setIsShown({...isShown, two:true})}
                onMouseLeave={() => setIsShown({...isShown, two:false})}*/
                >
                    <Div count='2'
                        onMouseEnter={() => setIsShown2(true)}
                        onMouseLeave={() => setIsShown2(false)}>
                        <Image css={img} src="/images/edudemic-brand.png" alt="Edudemic" width={307} height={496} />
                    </Div>
                    {isShown2 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem} onClick={() => { setCurrentModalImage(2), openModal() }}
                /*onMouseEnter={() => setIsShown({...isShown, three:true})}
                onMouseLeave={() => setIsShown({...isShown, three:false})}*/

                >
                    <Div count='3'
                        onMouseEnter={() => setIsShown3(true)}
                        onMouseLeave={() => setIsShown3(false)}>
                        <Image css={img} src="/images/bs-brand.png" alt="Burgers and shakes" width={308} height={498} />
                    </Div>
                    {isShown3 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem} onClick={() => { setCurrentModalImage(3), openModal() }}
                /*onMouseEnter={() => setIsShown({...isShown, four:true})}
                onMouseLeave={() => setIsShown({...isShown, four:false})}*/
                >

                    <Div count='4'
                        onMouseEnter={() => setIsShown4(true)}
                        onMouseLeave={() => setIsShown4(false)}>
                        <Image css={img} src="/images/heed-brand.png" alt="Heed" width={309} height={496} />
                    </Div>
                    {isShown4 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div css={flexItem} onClick={() => { setCurrentModalImage(4), openModal() }}
                /*onMouseEnter={() => setIsShown({...isShown, five:true})}
                onMouseLeave={() => setIsShown({...isShown, five:false})}*/
                >
                    <Div count='5'
                        onMouseEnter={() => setIsShown5(true)}
                        onMouseLeave={() => setIsShown5(false)}>
                        <Image css={img} src="/images/royal-brand.png" alt="Royal" width={304} height={495} />
                    </Div>
                    {isShown5 && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>
            </div>



        </div>

    );
}

export default Branding;
