import styled, { css } from "styled-components";
import { Wrapper } from '../../styledsForAll'
import { motion } from 'framer-motion'
export const WrapperBocalCartao = styled(Wrapper)`
    background-color: #637079;
    border-radius: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: min(5%, 1em);
    grid-gap: 1em;

    padding-bottom: calc(195px + min(5%, 1em));

    @media screen and (max-width: 768px){
        grid-row: 1/2;
    }
`

export const Header = styled.div`
    background: rgba(25, 33, 74, 0.5);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 69px;
    border-radius: 1em;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    grid-gap: .5em;
    padding: min(5%, 1em);
`

export const IconWrapper = styled.div`
    width: 4em;
    height: 100%;
    max-height: 3em;
    border-radius: .5em;
    flex-shrink: 0;

    svg {
        width: 100% !important;
        height: 100% !important;
        border-radius: .5em;
    }
`

export const Chip = styled.div`
    height: .3em;
    background: #D9D9D9;
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 142px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1em;
    position: relative;
`

export const Box = styled.div`
    height: 64px;
    background: #DADADA;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Entry = styled.div`
    height: 12px;
    background: #000000;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const CardContainer = styled(motion.div)`
    position: absolute;
    width: 129px;
    height: 195px;
    perspective: 100px;
    margin: 0 auto;
    left: 0;
    right: 0;
    :hover{
        cursor: pointer;
    }
`
interface ICard {
    active?:boolean
}
export const Card = styled(motion.div)<ICard>`
    width: 129px;
    height: 195px;
    background: radial-gradient(43.25% 43.25% at 68.96% 30.3%, #B754F9 0%, #8309D4 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 7.55806px 23.7539px rgba(0, 0, 0, 0.25);
    border-radius: 5.39861px;
    ${({active}) => active && css`
        position: absolute;
        border-bottom: 3px solid #B754F9;
        transform-style: preserve-3d;
        transform: rotateX(45deg);
        transition: all 300ms cubic-bezier(0.665, 0.065, 0.430, 0.845);
        transition-timing-function: cubic-bezier(0.665, 0.065, 0.430, 0.845);
        height: 8em;
    `}
    transition: all 300ms cubic-bezier(0.665, 0.065, 0.430, 0.845);
    transition-timing-function: cubic-bezier(0.665, 0.065, 0.430, 0.845);

`