import { find } from "../user"

async function findById(){
    const result = await find({
        _id: '62a7500667c14a5f3a37b063'
    })
    if(result?.hasOwnProperty('e') || !result || typeof result == 'string'){
        console.warn(`Erro no servico de busca por um usuário\n${JSON.stringify(result, null, '\t')}`)
        return { status: false }
    }
    return { status: true, user: result.response[0] } 
}

export {
    findById
}