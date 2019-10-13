import errorMiddleware from 'error-middleware'
import express from 'express'
import asyncHandler from 'express-async-handler'
import { ensureAuthenticated } from '../middlewares/ensure-authenticated'
import { authenticate } from './authentication/authenticate'
import { me } from './me'
import { pivotal } from './pivotal'
import { projects } from './projects'

const router = express.Router()

router.use('/auth', asyncHandler(authenticate))
router.use(me)
router.use(projects)
router.use(pivotal)
router.use('/', asyncHandler(ensureAuthenticated), (_, res) => res.send('AUTHENTICATED').status(200))
router.use(errorMiddleware)

export const routes = router
