import { WrapperLayout, ContainerLayout, RowLayout } from "./styleds";

export default function MainLayout(props:any){
    return <ContainerLayout>
        <WrapperLayout>
            {props.children}
        </WrapperLayout>
    </ContainerLayout>
}

export { RowLayout }

