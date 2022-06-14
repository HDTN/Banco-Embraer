import { useEffect, useState } from 'react'
import { Hero, ScreenPerfil } from './styleds'

import { findById } from '../../../../../../services/handles/user'
import IUser from '../../../../../../interfaces/IUser'
import { currencyFormat } from '../../../../../../util'

export default function ConsolePerfil(){
    const [user, setUser] = useState<IUser>()
    const [filter, setFilter] = useState<any>(null)

    useEffect(() => {
        async function fetch(){
            const { user } = await findById()
            setUser(user)
        }
        fetch()
    }, [])
    return <ScreenPerfil>
       <Hero>
            <div className='col-01'>                
                {user && <> 
                    <div>
                        <p>Nome:</p>
                        <p>{user && user['name']}</p>
                    </div>
                    <div>
                        <p>Email:</p>
                        <p>{user && user['email']}</p>
                    </div>
                    <div>
                        <p>Data de Nascimento:</p>
                        <p>{user && user['birth_date']}</p>
                    </div>
                    <div>
                        <p>Saldo em conta:</p>
                        <p>{user && currencyFormat(user['balance']*100)}</p>
                    </div>
                    {user?.documents?.map(doc => <div>
                        <p>{doc.type}:</p>
                        <p>{doc.value}</p>
                    </div>)}
                </>}
            </div>
            <div className='col-02'>
                {user && user?.transactions?.length ? <>
                    <div className='header'>
                        <label>
                            <input 
                                checked={filter == null}
                                onClick={() => setFilter(null)} 
                                name="filter-type" 
                                type="radio"/>
                            <p>Todos</p>
                        </label>
                        <label>
                            <input 
                                checked={filter == true}
                                onClick={() => setFilter(true)} 
                                name="filter-type" 
                                type="radio"/>
                            <p>Deposito</p>
                        </label>
                        <label>
                            <input 
                                checked={filter == false}
                                onClick={() => setFilter(false)} 
                                name="filter-type" 
                                type="radio"/>
                            Saque
                        </label>
                    </div>
                    {user && user?.transactions?.filter(el => filter == null ? 1==1 : el.type == filter).map(transaction => <div>
                        <div>
                            <strong>{transaction.type ? 'Depósito' : 'Saque'}</strong>
                            <p>no valor de</p>
                            <p>{currencyFormat(transaction.amount*100)}</p>
                        </div>
                        <div>
                            <p>{new Date(transaction.time).toLocaleDateString('pt-br')}</p>
                            <p>às</p>
                            <p>{new Date(transaction.time).toLocaleTimeString('pt-br')}</p>
                        </div>
                    </div>
                )}
                </> : <h1>Sem Transações</h1>}
            </div>
        
       </Hero>
    </ScreenPerfil>
}