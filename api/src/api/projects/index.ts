import express from 'express'
import asyncHandler from 'express-async-handler'
import { ensureAuthenticated } from '../../middlewares/ensure-authenticated'
import { fetchProjectsHandler } from './fetch-projects'

const router = express.Router()

router.get('/projects', asyncHandler(ensureAuthenticated), asyncHandler(fetchProjectsHandler))

export const projects = router
