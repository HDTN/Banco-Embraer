import styled from "styled-components";
import { Screen } from '../../../../styledsForAll'

export const Hero = styled.div`
    display: flex;
    justify-content: flex-start;
    grid-gap: 2em;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    .col-01, .col-02 {
        width: 100%;
        background-color: #dadada;
        border-radius: 1em;
        padding: min(5%, 1em);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-gap: .5em;
    }

    .col-01 {
        width: 100%;
        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            grid-gap: .1em;
            > p:first-child{
                font-size: 18px;
                font-weight: 500;
                text-transform: capitalize;
            }
            > p:last-child{
                font-size: 15px;
                font-weight: lighter;
                text-transform: capitalize;
            }
        }
    }


    .col-02 {
        .header{
            position: sticky;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;

            label {
                display: flex;
                align-items: center;
                justify-content: center;
                grid-gap: .5em;
                :hover{
                    cursor: pointer;
                }
            }
        }
        width: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;  
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
            padding: min(5%, 1em);
            width: 100%;
            background-color: #fff;
            box-shadow: 0 4px 4px rgba(128,128,128,.25);
            border-radius: .5em;

            > div {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                grid-gap: .5em;
            }
        }

        
    }

`

export const ScreenPerfil = styled(Screen)`
    max-height: 500px;
    @media screen and (max-width: 768px) {
        max-height: 768px;
    }
`
