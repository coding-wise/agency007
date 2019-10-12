import express from 'express'
import asyncHandler from 'express-async-handler'
import { ensureAuthenticated } from '../../middlewares/ensure-authenticated'
import { addMemberPivotalHandler } from './add-member-pivotal'
import { fetchProjectHandler } from './fetch-project'
import { fetchProjectsHandler } from './fetch-projects'
import { removeMemberPivotalHandler } from './remove-member-pivotal'

const router = express.Router()

router.get('/projects', asyncHandler(ensureAuthenticated), asyncHandler(fetchProjectsHandler))
router.get('/projects/:id', asyncHandler(ensureAuthenticated), asyncHandler(fetchProjectHandler))

router.post('/projects/:id/pivotal', asyncHandler(ensureAuthenticated), asyncHandler(addMemberPivotalHandler))
router.delete(
  '/projects/:id/pivotal/:membershipId',
  asyncHandler(ensureAuthenticated),
  asyncHandler(removeMemberPivotalHandler),
)

export const projects = router
