import { Request, NextFunction, Response } from "express";
import { ObjectID } from "mongodb";
import { FindService } from "../../../services/user/find/FindService";

export async function checkBalance(req: Request, res: Response, next: NextFunction){
    try{
        const { _id, amount, type } = req.body 

        if(!_id){
            return res.status(500).json({status: false, e: 'error'})
        }
        const userFindService = new FindService()
        const userReponse = await userFindService.execute({_id: ObjectID(_id)})
        if(!userReponse || (userReponse && userReponse.length == 0)){
            return res.status(403).json({status: false, e: 'error'})
        }

        const user = userReponse[0]

        if(!type && (user.balance < amount)){
            return res.status(403).json({status: false, e: 'Saldo Insuficiente'})
        }
        
        next()
        
    }catch(e){
        console.warn('Erro no middlewares/transaction/checkBalance')
        console.warn(e)
        return res.status(500).json({status: false, e: 'error'})
    }
}