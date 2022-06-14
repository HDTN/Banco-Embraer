import styled from "styled-components";
import { Wrapper } from '../../styledsForAll'

export const WrapperBocalDeposito = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: min(5%, 1em);
    grid-gap: 1em;
    height: 100%;
`

export const Header = styled.div`
    background: rgba(25, 33, 74, 0.5);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 69px;
    max-width: min(100%, 247px);
    border-radius: .5em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: min(5%, 1em);
`
export const Content = styled.div`
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: .5em;
    height: 50%;
    min-height: 71px;
`

export const Box = styled.div`
    height: 26px;
    background: #DADADA;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
`

