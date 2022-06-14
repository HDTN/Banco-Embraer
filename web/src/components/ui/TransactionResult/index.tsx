import { ReactComponent as IconSuccess } from '../../../svgs/success.svg'
import { ReactComponent as IconError } from '../../../svgs/error.svg'

import { Wrapper } from './styleds'
import { currencyFormat } from '../../../util'

export default function TransactionResult({result, type}: any){
    return <Wrapper>

        <div className='header'>
            {result.status ? <IconSuccess /> : <IconError />}
        </div>

        <h1>{type ? 'Depósito' : 'Saque'}</h1>
        <h4>{result.status ? 'Realizado com sucesso.' : 'Não realizado.'}</h4>
        <h5>{!result.status && result.e}</h5>

        <div className='footer'>
            {result.status && 
                Object.keys(result?.response?.notes)
                    .map(key => <div>{currencyFormat(Number(key)*100)} x {result?.response?.notes[key]}</div>)}
        </div>
    </Wrapper>
}