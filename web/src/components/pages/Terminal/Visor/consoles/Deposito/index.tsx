import { useEffect, useState } from "react"
import { useTeclado } from "../../../../../../contexts/teclado"
import { Screen } from '../../../styledsForAll'
import { Hero, IllustrationWrapper } from './styleds'
import { ReactComponent as IllustrationDeposito } from '../../../../../../svgs/illustration-deposit.svg'
import { createTrasaction } from "../../../../../../services/handles/transaction"
import TransactionResult from "../../../../../ui/TransactionResult"

export default function ConsoleDeposito(){
    const { value, valueNumber, changeValue, 
    clearValue, confirm, resetKeyboard }:any = useTeclado()

    useEffect(() => {
        clearValue()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            const result:any = await createTrasaction(valueNumber, true)
            setResponse(result)
            resetKeyboard()
            setTimeout(function(){ setResponse({}) }, 4000);
        }
        if (confirm == true){
            fetch()           
        }
    }, [confirm])

    const [response, setResponse] = useState<any>({})

    return <Screen>
        <Hero>
            <div className="col-01">
                <input 
                style={{outline: 'none'}}
                id="input-teclado-value"
                autoFocus 
                value={value} 
                onChange={(e:any) => changeValue(e.nativeEvent.data)}
            />
            </div>
            <div className="col-02">   
                <span>
                    <h1>Faça seu Deposito</h1>
                    <span>
                        <h5>Escolha entre as opções de notas</h5>
                        <h5>Pressione a telca enter</h5>
                        <h5>E logo em seguida, a tecla confirmar</h5>
                    </span>
                </span>
                <IllustrationWrapper>
                    {!Object.keys(response).length && <IllustrationDeposito />}
                    {Object.keys(response).length > 0 && <TransactionResult type={true} result={response}/>}
                </IllustrationWrapper>
            </div>
        </Hero>
    </Screen>
}