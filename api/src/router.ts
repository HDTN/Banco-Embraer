import { Router } from 'express'
import routes from './routes'

const {
    UserRouter,
    TransactionRouter,
} = routes

const router = Router()

router.use('/user', UserRouter)
router.use('/transaction', TransactionRouter)

export { router }

