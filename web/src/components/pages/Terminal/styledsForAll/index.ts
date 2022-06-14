import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #637079;
    border-radius: 1em;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`

export const Screen = styled.div`
	background-color: rgba(255, 255, 255, .3);
    height: 100%;
    border-radius: inherit;
    box-shadow: 0px 8px 15px -3px rgba(0,0,0,0.1);
    padding: min(5%, 1em);

`

export const BocalGrupo = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 1em;
`

export const WrapperBocalCartao = styled(Wrapper)``

export const WrapperBocalRetirada = styled(Wrapper)``

export const WrapperBocalDeposito = styled(Wrapper)``

export const WrapperVisor = styled(Wrapper)``

export const WrapperTeclado = styled(Wrapper)``
