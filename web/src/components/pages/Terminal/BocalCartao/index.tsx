import { WrapperBocalCartao, Header, Content, Box, Entry, IconWrapper, Card, CardContainer } from "./styleds";
import { ReactComponent as IconMasterCard } from '../../../../svgs/mastercard.svg'
import { useState } from "react";

const variantsContainer = {
  open: { y: "28%"},
  closed: { y: "60%"},
}

export default function BocalCartao(){
    const [cardClick, setCardClick] = useState(false)
    return <WrapperBocalCartao>
        <Header>
            <IconWrapper>
                <IconMasterCard />
            </IconWrapper>
        </Header>

        <Content>
            <Box>
                <Entry></Entry>
            </Box>
            <CardContainer 
                onClick={() => setCardClick(!cardClick)}
                animate={cardClick ? "open" : "closed"}
                variants={variantsContainer}
            >
                <Card 
                    onClick={() => setCardClick(!cardClick)}
                    active={cardClick === true}
                />
            </CardContainer>
        </Content>
    </WrapperBocalCartao>
}