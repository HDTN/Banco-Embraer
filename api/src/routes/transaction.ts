import { Router } from 'express'
import { controllers } from '../controllers/transaction'
import midd from '../middlewares/transaction'
const router = Router()

router.post('/create', midd.checkBalance, midd.checkValidAmount, controllers.createController)

export { router as TransactionRouter }