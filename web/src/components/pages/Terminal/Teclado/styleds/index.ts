import styled, { css } from "styled-components";
import { Wrapper } from '../../styledsForAll'
import { motion } from 'framer-motion'

export const WrapperTeclado = styled(Wrapper)`
    background-color: #637079;
    border-radius: 1em;
    display: grid;
    grid-template-columns: 1fr .3fr;
    grid-template-rows: 1fr .2fr;
    grid-gap: 1em;
    padding: min(5%, 1em);
`

export const TecladoNumerico = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1em;
`

export const TecladoComandos = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1em;
`

interface IButton {
    numeric?: boolean,
    command?: boolean,
}

export const Button = styled(motion.button)<IButton>`
    background: #DADADA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: .5em;
    ${({numeric}) => numeric && css`
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 58px;
            display: flex;
            align-items: center
            text-align: center;
            color: #000000;
        }
    `}

    ${({command}) => command && css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        grid-gap: .1em;
        text-transform: uppercase;
        padding: 0 min(5%, 1em);

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
    `}

    :hover{
        cursor: pointer;
    }
`

interface IChip {
    color: string 
}
export const Chip = styled.div<IChip>`
    width: 69px;
    height: 12px;
    border-radius: 20px;

    ${({color}) => color && css`
        background-color: ${color};
    `}

`
interface IButtonSubmit {
    disabled?: boolean
}
export const ButtonSubmit = styled(Button)`
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;

        color: #000000;
    }

    ${({disabled}) => disabled && css`
        opacity: .7;
    `}
`