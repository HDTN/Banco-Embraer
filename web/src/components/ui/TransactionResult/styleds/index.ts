import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .header{
        height: 5em;
    }


    .footer{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        grid-gap: 0.5em;
        flex-direction: row-reverse;
    }
`