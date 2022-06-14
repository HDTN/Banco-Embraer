import { ObjectID } from "mongodb"

export default (query: any) => {
    const _query = query
    const keys = Object.keys(_query)
            
    for(let k = 0; k < keys.length; k++){
        let key = keys[k]
        if(key.includes('_id')) _query[key] = ObjectID(_query[key])
    }
    
    return _query
}