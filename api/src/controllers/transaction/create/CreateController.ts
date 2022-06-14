import { Request, Response } from "express";
import { Transaction } from "../../../entities/Transaction";
import { CreateService } from "../../../services/transaction/create/CreateService";
import parseObjectId from "../../../util/mongodb/parseObjectId";

export class CreateController {
    async handle(req: Request, res: Response) {
        try{
            const body = {...req.body }

            const _body = parseObjectId(body)

            const transaction = new Transaction({..._body})

            const transactionCreateService = new CreateService()

            const response = await transactionCreateService.execute(transaction)

            if(!response){
                console.log('Erro após o servico de criacao de uma transação ser executado.')
                return res.status(500).json({status: false, e: 'error'})
            }

            return res.status(200).json({status: true, response})
        }catch(e){
            console.warn(e)
            console.warn('Error no controllers/transaction/create/CreateController')
            return res.status(500).json({status: false, e})
        }
    }
}