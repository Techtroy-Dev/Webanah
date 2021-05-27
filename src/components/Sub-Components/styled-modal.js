/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react';
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"
import Modal from 'react-modal';
// import { WindowClose } from "@emotion-icons/fa-regular"
import { WindowClose } from "@emotion-icons/fa-solid"

const customStyles = {
    overlay: {
        zIndex: 4,
        backgroundColor: 'rgb(0 0 0 / 70%)',
        color: 'black',
    },
    content: {
        top: '7.5%',
        left: '5%',
        right: '5%',
        bottom: '7.5%',
        padding: '5px',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)'
    }
};

const StyledModal = ({ isOpen, onAfterOpen, onRequestClose, closeModal, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
        >
            <div
                css={css`
                 width: 100%;
                 height: 100%;
                 overflow-y: auto;
                 &::-webkit-scrollbar {
                     width: 0.3rem;
                 }
                 &::-webkit-scrollbar-track {
                     box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                     background-color: slategrey;
                 }
                 &::-webkit-scrollbar-thumb {
                     border-radius: 2rem;
                     background-color: #16f533;
                     outline: 1px solid slategrey;
                 }
              `}>
                {children}
                <div onClick={closeModal}
                    css={css`
                          /* color: red; */
                          /* padding: 5px; */
                          position: absolute;
                          top: 7.5px;
                          left: 7.5px;
                          cursor: pointer;
                          `}>
                    <WindowClose size="24" color="black" />
                </div>
            </div>
        </Modal>
    )
}

export default StyledModal;