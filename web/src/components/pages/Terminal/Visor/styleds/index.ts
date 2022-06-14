import { motion } from "framer-motion";
import styled from "styled-components";
import { Wrapper } from "../../styledsForAll";

export const WrapperVisor = styled(Wrapper)`
    background-color: #637079;
    border-radius: 1em;
    display: grid;
    /* grid-template-columns: .2fr 1fr .2fr; */
    grid-template-columns: .2fr 1fr;
    grid-gap: 1em;
    padding: min(5%, 1em);
    @media screen and (max-width: 768px) {
        /* grid-template-rows: .2fr 1fr .2fr; */
        grid-template-rows: .2fr 1fr;
        grid-template-columns: unset;

    }
`

export const ContainerVisor = styled.div`
    box-shadow: inset 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 1em;
    position: relative;
`

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 1em;
`

export const Button = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    display: flex;   
    border-radius: .5em;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    padding: min(5%, 1em);
    text-transform: uppercase;

    p {
        
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }

    :hover{
        cursor: pointer;
    }

`