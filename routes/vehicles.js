import { Router } from 'express'
import * as vehiclesCtrl from '../controllers/vehicles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', vehiclesCtrl.index)
router.post('/',isLoggedIn, vehiclesCtrl.create)

export {
  router
}