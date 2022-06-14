import { Request, Response } from "express";
import { FindService } from "../../../services/user/find/FindService";
import parseObjectId from "../../../util/mongodb/parseObjectId";

export class FindController {
    async handle(req: Request, res: Response){
        try{
            const query = req.query

            const _query = parseObjectId(query)
            
            const userFindService = new FindService()

            const response = await userFindService.execute(_query)

            if(!response){
                console.log('Erro após o servico de busca por um usuario ser executado.')
                return res.status(500).json({status: false, e: 'error'})
            }

            return res.status(200).json({status: true, response})
        }catch(e){
            console.warn(e)
            console.warn('Error no controllers/user/find/FindController')
            return res.status(500).json({status: false, e})
        }
    }
}