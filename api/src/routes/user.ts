import { Router } from 'express'
import { controllers } from '../controllers/user'

const router = Router()

router.get('/find', controllers.findController)

export { router as UserRouter }