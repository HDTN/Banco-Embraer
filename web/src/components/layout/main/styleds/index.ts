import styled, { css } from 'styled-components'

export const WrapperLayout = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-width: 1540px;
    margin: 0 auto;
    width: 100%;
    background-color: #393E41;
    border-radius: 2em 2em 0 0;
    padding: 1em;
    grid-gap: 1em;
    height: calc(100vh);
    overflow-y: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none; 

    &::-webkit-scrollbar {
        display: none;
    }
`

export const ContainerLayout = styled.div`
    background: linear-gradient(90deg, #19214A, #19214Aff);
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
`

interface IRowLayout {
    proportion?: Array<string>,
    minHeight?: string,
    maxHeight?: string,
}

export const RowLayout = styled.div<IRowLayout>`
    display: grid;
    grid-template-columns: .8fr .2fr;
    grid-gap: 1em;

    ${({proportion}) => proportion && css`
        @media screen and (max-width: 768px) {
            grid-template-rows: ${`min-content ${proportion[1]}`};
            grid-template-columns: unset;
        }
        grid-template-columns: ${`${proportion[0]} ${proportion[1]}`};
    `}

    ${({minHeight}) => minHeight && css`
        min-height: ${minHeight};
    `}
    
    ${({maxHeight}) => maxHeight && css`
        max-height: ${maxHeight};
    `}


    @media screen and (max-width: 768px) {
        grid-template-rows: min-content .2fr;
        grid-template-columns: unset;
        min-height: unset;
    }

`

//analisar a trocar de .8fr ou a primeira propocao para 1fr quando for para o mobile
//analisar a trocar de .8fr ou a primeira propocao para 1fr quando for para o mobile