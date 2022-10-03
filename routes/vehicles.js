import { Router } from 'express'
import * as vehiclesCtrl from '../controllers/vehicles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', vehiclesCtrl.index)
router.get('/:id', vehiclesCtrl.show)
router.get('/:id/edit', isLoggedIn, vehiclesCtrl.edit)

router.put('/:id', isLoggedIn, vehiclesCtrl.update)

router.post('/',isLoggedIn, vehiclesCtrl.create)

router.patch('/:id/change-speed', isLoggedIn, vehiclesCtrl.changeSpeed)

router.delete('/:id', isLoggedIn, vehiclesCtrl.delete)

export {
  router
}