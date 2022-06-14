import MainLayout, { RowLayout } from "../../components/layout/main";
import { Teclado, Visor, BocalCartao, BocalDeposito, BocalRetirada, BocalGrupo } from "../../components/pages/Terminal";

export default function TerminalPage(){
    return <MainLayout>
        <RowLayout 
            proportion={['1fr', '.3fr']}
            minHeight="540px"
        >
                <Visor />
            <BocalCartao/>
        </RowLayout>
        <RowLayout proportion={['.6fr', '1fr']}>
            <Teclado />
            <BocalGrupo>
                <BocalDeposito />
                <BocalRetirada />
            </BocalGrupo>
        </RowLayout>
    </MainLayout>
} 