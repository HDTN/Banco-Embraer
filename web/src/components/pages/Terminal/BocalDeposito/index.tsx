import { WrapperBocalDeposito, Header, Content, Box } from "./styleds";
import { ReactComponent as IconInsertCard } from '../../../../svgs/insert-card.svg'

export default function BocalDeposito(){
    return <WrapperBocalDeposito>
        <Header>
            <IconInsertCard />
        </Header>

        <Content>
            <Box>
            </Box>
        </Content>
    </WrapperBocalDeposito>
}