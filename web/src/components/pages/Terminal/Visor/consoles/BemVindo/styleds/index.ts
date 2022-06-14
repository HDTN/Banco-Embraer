import styled from "styled-components";

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 2em;
    height: 100%;

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