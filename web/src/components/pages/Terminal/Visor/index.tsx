import { useEffect, useState } from "react";
import { useVisor } from "../../../../contexts/visor";
import { WrapperVisor, ContainerVisor, ButtonGroup, Button } from "./styleds";

export default function Visor(){
    const { consoles, consoleChoose, switchOptions }:any = useVisor()

    return <WrapperVisor>
        <ButtonGroup>
            {consoleChoose.options
                .map((op:any) => (<Button
                    whileTap={{ scale: 0.9 }} 
                    key={op.label}
                    onClick={() => switchOptions(op.action)}>
                        <p>{op.label}</p>
                </Button>))
            }
        </ButtonGroup>
        <ContainerVisor>
            {consoles.filter((console:any) => console.choose === true).map((console:any) => console.component)}    
        </ContainerVisor>
        {/* <ButtonGroup>
            {consoleChoose.options
                .map((op:any) => (<Button
                    whileTap={{ scale: 0.9 }} 
                    key={op.label}
                    onClick={() => switchOptions(op.action)}>
                        <p>{op.label}</p>
                </Button>))
                .filter((_: any, idx: number):any => (idx >= Math.ceil(consoleChoose?.options?.length / 2)))
            }
        </ButtonGroup> */}
    </WrapperVisor>
    
}