import React, { useState } from 'react';
import '../../App.css';
import { Animated } from "react-animated-css";
import styled from "styled-components";
import media from '../../../media';


const ToolTipContainer = styled.div`
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
`;

const ToolTipBox = styled.div`
    display: none;

    ${media.small`
        width: 300px
    `}
`;

const ToolTipText = styled.div`
    font-size: .8rem;
    opacity: .8;
`;

// const ToolTipArrow = styled.span`
//     position: absolute;
//     top: -10px;
//     left: 5%;
//     border-width: 5px;
//     border-style: solid;
//     border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
// `;

/**
 *  Add this to your css file
 *  .tooltip-box.visible {
 *      display: inline-block;
 *      position: absolute;
 *      width: 500px;
 *      height: auto;
 *      z-index: 10;
 *      background: rgba(156, 156, 156, 0.7);
 *      color: rgb(255, 255, 255);
 *      padding: 10px;
 *      border-radius: 10px;
 *      left: calc(3% + 5px);
 *   }
 * 
 **/

const MyTooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = useState(false);

    return (
        <ToolTipContainer>
            <ToolTipBox className={show ? 'tooltip-box visible' : 'tooltip-box'}>
                <Animated animationIn="fadeIn" animationInDuration={5000} isVisible={true}>
                    {/* <ToolTipArrow className="tooltip-arrow" /> */}
                    <ToolTipText className="tooltext">{text}</ToolTipText>
                </Animated>
            </ToolTipBox>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
                {...rest} >
                {children}
            </div>
        </ToolTipContainer>
    );
};

export default MyTooltip;
