import { WrapperBocalRetirada, Header, Content, Box } from "./styleds";
import { ReactComponent as IconMoney } from '../../../../svgs/paper-money-two.svg'
export default function BocalRetirada(){
    return <WrapperBocalRetirada>
        <Header>
                <IconMoney />
        
        </Header>

        <Content>
            <Box>
            </Box>
        </Content>
    </WrapperBocalRetirada>
}