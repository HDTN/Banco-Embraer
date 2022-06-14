import styled from "styled-components";

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-gap: 2em;
    height: 100%;

    .col-01 {
        input {
            width: 100%;
            height: 64px;
            background-color: #DADADA;
            border-radius: .5em;
            border: none;
            font-size: 45px;
            padding: 0 min(5%, .5em);
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }

            &[type=number] {
            -moz-appearance: textfield;
            }
        }
    }

    .col-02 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
                > span {
                        display: none;
                }
            }
    }
`

export const IllustrationWrapper = styled.div`
    width: 100%;
    svg{
        width: 100% !important;
        height: 100% !important;
    }
`