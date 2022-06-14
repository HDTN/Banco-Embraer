import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import BemVindo from '../components/pages/Terminal/Visor/consoles/BemVindo'
import Saque from '../components/pages/Terminal/Visor/consoles/Saque'
import Perfil from '../components/pages/Terminal/Visor/consoles/Perfil'
import Deposito from '../components/pages/Terminal/Visor/consoles/Deposito'
import { useTeclado } from './teclado'

const StateContext = createContext({})

type Props = {
 children: JSX.Element
}

const BemVindoOptions:any = [
    {
        label: 'Saque',
        action: ['change', 'saque']
    },
    {
        label: 'Deposito',
        action: ['change', 'deposito']
    },
    {
        label: 'Perfil',
        action: ['change', 'perfil']
    },
]

const SaqueOptions:any = [
    {
        label: 'Voltar',
        action: ['return']
    },
    {
        label: 'R$ 100,00',
        action: ['increment', '10000']
    },
    {
        label: 'R$ 50,00',
        action: ['increment', '5000']
    },
    {
        label: 'R$ 20,00',
        action: ['increment', '2000']
    },
    {
        label: 'R$ 10,00',
        action: ['increment', '1000']
    },
]

const PerfilOptions:any = [
    {
        label: 'Voltar',
        action: ['return']
    }
]

const DepositoOptions:any = [
    {
        label: 'Voltar',
        action: ['return']
    },
    {
        label: 'R$ 100,00',
        action: ['increment', '10000']
    },
    {
        label: 'R$ 50,00',
        action: ['increment', '5000']
    },
    {
        label: 'R$ 20,00',
        action: ['increment', '2000']
    },
    {
        label: 'R$ 10,00',
        action: ['increment', '1000']
    },
]

const _consoles = [
    { 
        key: 'bem_vindo', 
        choose: false, 
        component: <BemVindo />, 
        options: BemVindoOptions, 
        label: 'Bem Vindo',
         
    },                   
    { 
        key: 'saque', 
        choose: false, 
        component: <Saque />, 
        options: SaqueOptions, 
        label: 'Saque',
         
    },                 
    { 
        key: 'perfil', 
        choose: false, 
        component: <Perfil />, 
        options: PerfilOptions, 
        label: 'Perfil',
         
    },                  
    { 
        key: 'deposito', 
        choose: false, 
        component: <Deposito />, 
        options: DepositoOptions, 
        label: 'Depósito',
         
    },                   
]

const VisorContext: React.FC<Props> = ({ children }) => {   

    const [consoles, setConsoles] = useState<any>([..._consoles, { key: 'bem_vindo', choose: true, component: <BemVindo />, options: BemVindoOptions, label: 'Bem Vindo' }])

    const changeOption = (next:string) => {
        const nextOptions = _consoles.map(item => item.key == next ? ({...item, choose: true}) : ({...item}))
        setConsoles(() => ([...nextOptions]))
    }

    const switchOptions = (action:Array<string>) => {
        switch(action[0]){
            case 'change':
                changeOption(action[1])
                break
            case 'return':
                changeOption('bem_vindo')
                break
            case 'increment':
                clearValue()
                changeValue(action[1])
                break
        }
    }

    const { changeValue, clearValue }: any = useTeclado()

    return <StateContext.Provider
            value={{
                consoles,
                changeOption,
                switchOptions,
                consoleChoose: useMemo(() => consoles.filter((el:any) => el.choose == true)[0], [consoles]),
            }}>
        {children}
    </StateContext.Provider>
} 

const useVisor = () => useContext(StateContext)

export {
    VisorContext,
    useVisor
}


/**
    O VisorContext é responsavel por manter todos os componentes e suas opçãos de uso.
    É disponibilizado um hook useVisor para ter acesso ao que o contexto irá prover.
*/