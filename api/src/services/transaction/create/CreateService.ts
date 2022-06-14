import { AppDataSource } from "../../../database/data-source";
import { Transaction } from "../../../entities/Transaction";
import { User } from "../../../entities/User";
import extractBanknotes from "../../../util/extractBanknotes";

export class CreateService {
    async execute(data: Transaction) {
        try{

            const upsertRepository = AppDataSource.getMongoRepository(User)

            const { _id, type } = data
            
            delete data._id

            let user = await upsertRepository.findBy({_id: _id})

            const _user = new User({...user[0]})

            const userBalance = _user.balance

            const newUserBalance = type ? userBalance + Number(data.amount) : userBalance - Number(data.amount)

            await upsertRepository.updateOne(
                { _id }, 
                {
                    $push: { transactions: data },
                    $set: { balance: newUserBalance }
                }, 
            )

            _user['transactions'] = _user?.transactions ? [..._user?.transactions, data] : [data]
            _user['balance'] = newUserBalance


            return { transaction: data, notes: extractBanknotes(Number(data.amount)) }
        
        }catch(e){

            console.warn('Erro no services/transaction/create/CreateService')
            console.warn(e)
            return false
            
        }
    
    }
}
