import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { currencyFormat } from '../util'
import { useVisor } from './visor'
const StateContext = createContext({})

type Props = {
 children: JSX.Element
}




const TecladoContext: React.FC<Props> = ({ children }) => {   
    const [value, setValue] = useState<string>('')
    const [enter, setEnter] = useState<boolean>(false)
    const [confirm, setConfirm] = useState<boolean>(false)
    const [valueFormated, setValueFormated] = useState<string>('')

    const incrementValue = (data:string | number) => {
        setValue(past => String(past)+String(data))
        document.getElementById('input-teclado-value')?.focus()
    }

    const backspace = async () => {
        await setValue(past => past?.substring(0, past.length - 1))
        if(value.length - 1 == 0){
            setEnter(false)
        }
        document.getElementById('input-teclado-value')?.focus()
    }

    const clearValue = useCallback(() => {
        setValue('')
        document.getElementById('input-teclado-value')?.focus()
    }, [])

    const changeValue = useCallback((data:string | number) => {
        if(data == ',') return alert('nao use a virgula')
        if(data == null){
            backspace()
            return
        }
        setValue(past => String(past)+String(data))
        document.getElementById('input-teclado-value')?.focus()
    }, [])

    const hitEnter = () => {
        if(value.length > 0){
            setEnter(true)
            document.getElementById('input-teclado-value')?.focus()
        }
    }

    const hitConfirm = () => {
        setConfirm(true)
    }


    const resetKeyboard = () => {
        setValue('')
        setConfirm(false)
        setEnter(false)
    }

    const hitCancel = () => {
        resetKeyboard()
    }

    useEffect(() => {
        setValueFormated(currencyFormat(Number(value)))
    }, [value])

    return <StateContext.Provider
            value={{
                resetKeyboard,
                incrementValue,
                changeValue,
                backspace,
                clearValue,
                hitEnter,
                hitCancel,
                hitConfirm,
                confirm,
                value: valueFormated || '',
                valueNumber: Number(value)/100,
                available: value != '' && enter,
            }}>
        {children}
    </StateContext.Provider>
} 

const useTeclado = () => useContext(StateContext)

export {
    TecladoContext,
    useTeclado
}


/**
    O TecladoContext é responsavel por manter todos os componentes e suas opçãos de uso.
    É disponibilizado um hook useTeclado para ter acesso ao que o contexto irá prover.
*/