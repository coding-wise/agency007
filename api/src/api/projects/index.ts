import express from 'express'
import asyncHandler from 'express-async-handler'
import { ensureAuthenticated } from '../../middlewares/ensure-authenticated'
import { fetchProjectHandler } from './fetch-project'
import { fetchProjectsHandler } from './fetch-projects'

const router = express.Router()

router.get('/projects', asyncHandler(ensureAuthenticated), asyncHandler(fetchProjectsHandler))
router.get('/projects/:id', asyncHandler(ensureAuthenticated), asyncHandler(fetchProjectHandler))

export const projects = router
