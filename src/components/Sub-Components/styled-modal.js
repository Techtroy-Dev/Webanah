/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react';
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '7.5%',
        left: '5%',
        right: '5%',
        bottom: '7.5%',
        padding: '5px'
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)'
    }
};

const StyledModal = ({ isOpen, onAfterOpen, onRequestClose, children }) => {

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
                     width: 0.25rem;
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
            </div>
        </Modal>
    )
}

export default StyledModal;