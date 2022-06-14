import { AppDataSource } from "../../../database/data-source";
import { User } from "../../../entities/User";
import IQueryUser from "../../../interfaces/IQueryUser";

export class FindService {
    async execute(query: IQueryUser){
        try{
        
            const userRepository = AppDataSource.getRepository(User)
    
            const result = await userRepository.findBy({...query})
    
            return result

        }catch(e){

            console.warn('Erro no services/user/find/FindService')
            console.warn(e)
            return false
        
        }
    }
}