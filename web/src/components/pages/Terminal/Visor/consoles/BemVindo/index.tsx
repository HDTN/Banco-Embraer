import { Screen } from '../../../styledsForAll'
import { ReactComponent as IllustrationBemVindo } from '../../../../../../svgs/illustration-welcome.svg'
import { Hero, IllustrationWrapper } from './styleds'

export default function ConsoleBemVindo(){
    return <Screen>
        <Hero>
            <div className="col-02">
                <span>
                    <h1>Bem Vindo ao Banco Embraer</h1>
                    <span>
                        <h5>Escolha uma das opções de serviços</h5>
                    </span>
                </span>
                <IllustrationWrapper>
                    <IllustrationBemVindo />
                </IllustrationWrapper>
            </div>
        </Hero>
    </Screen>
}