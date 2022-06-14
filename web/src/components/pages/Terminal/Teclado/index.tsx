import { useEffect, useState } from "react";
import { useTeclado } from "../../../../contexts/teclado";
import { WrapperTeclado, TecladoNumerico, TecladoComandos, Button, Chip, ButtonSubmit } from "./styleds";

export default function Teclado(){
    const { incrementValue, backspace, 
    hitEnter, available, hitConfirm, hitCancel }:any = useTeclado()


    return <WrapperTeclado>
        <TecladoNumerico>
            {[...new Array(10)].map((item, idx) => 
                <Button 
                    whileTap={{ scale: 0.9 }}
                    numeric={true} 
                    key={idx} 
                    type="button" 
                    onClick={() => incrementValue(idx)}>
                        <p>{idx}</p>
                    </Button>
            )}
        </TecladoNumerico>
        <TecladoComandos>
            <Button 
                whileTap={{ scale: 0.9 }}
                onClick={() => hitCancel()}
                command={true} 
                type="button">
                    <p>cancela</p>
                    <Chip color="#EC1919"/>
            </Button>
            <Button 
                whileTap={{ scale: 0.9 }}
                command={true} 
                type="button" 
                onClick={() => backspace()}>
                    <p>corrige</p>
                    <Chip color="#ECBB19"/>
            </Button>
            <Button 
                command={true} 
                onClick={() => hitEnter()}
                type="button">
                    <p>enter</p>
                    <Chip color="#1A6939"/>
            </Button>
            {/*variar funcao do enter de acordo com o console escolhido*/}
        </TecladoComandos>
        <ButtonSubmit
            onClick={() => hitConfirm()}
            disabled={!available}
        >
            <p>confirmar</p>
        </ButtonSubmit>
    </WrapperTeclado>
}