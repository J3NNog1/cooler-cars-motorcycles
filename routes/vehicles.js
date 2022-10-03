import { Router } from 'express'
import * as tacosCtrl from '../controllers/vehicles.js'

const router = Router()

router.get('/', tacosCtrl.index)

export {
  router
}