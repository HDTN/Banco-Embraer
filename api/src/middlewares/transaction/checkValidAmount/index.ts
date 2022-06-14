import { Request, NextFunction, Response } from "express";

export async function checkValidAmount(req: Request, res: Response, next: NextFunction){
    try{
        const { amount, type } = req.body 

        const _amout = String(amount)

        let dividedAmount = _amout.match(/.{1}/g).map((item, idx) => {
            return `${Number(item + [...new Array((_amout.length) - idx)].map(() => '0').reduce((total, curr) => total+curr))/10}`
        })

        const available = dividedAmount.map(item => {
            const num = Number(item)
            const check = [100, 50, 20, 10].map(item => num%item == 0 ? true : false)
            return check.some(item => item == true)
        })

        if(!available.every(item => item == true)){
            return res.status(400).json({status: false, e: `Não é possivel ${type ? 'depositar' : 'sacar'} essa quantidade.`})
        }
        
        next()
        
    }catch(e){
        console.warn('Erro no middlewares/transaction/checkValidAmount')
        console.warn(e)
        return res.status(500).json({status: false, e: 'error'})
    }
}