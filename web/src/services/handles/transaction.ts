import { create } from "../transaction"

async function createTrasaction(amount:number, type: boolean){
    const result = await create({
        _id: '62a7500667c14a5f3a37b063',
        amount,
        type
    })
    if(result?.hasOwnProperty('e') || !result || typeof result == 'string'){
        console.warn(`Erro no servico de criacao de uma transaçãp\n${JSON.stringify(result, null, '\t')}`)
        return { status: false, e: result.e }
    }
    return result 
}

export {
    createTrasaction
}