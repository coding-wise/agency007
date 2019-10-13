import express from 'express'
import asyncHandler from 'express-async-handler'
import { ensureAuthenticated } from '../../middlewares/ensure-authenticated'
import { addMemberPivotalHandler } from './add-member-pivotal'
import { addProjectHandler } from './add-project'
import { fetchProjectHandler } from './fetch-project'
import { fetchProjectsHandler } from './fetch-projects'
import { removeMemberPivotalHandler } from './remove-member-pivotal'
import { updateProjectHandler } from './update-project'

const router = express.Router()

router.get('/projects', asyncHandler(ensureAuthenticated), asyncHandler(fetchProjectsHandler))
router.post('/projects', asyncHandler(ensureAuthenticated), asyncHandler(addProjectHandler))
router.get('/projects/:id', asyncHandler(ensureAuthenticated), asyncHandler(fetchProjectHandler))
router.put('/projects/:id', asyncHandler(ensureAuthenticated), asyncHandler(updateProjectHandler))

router.post('/projects/:id/pivotal', asyncHandler(ensureAuthenticated), asyncHandler(addMemberPivotalHandler))
router.delete(
  '/projects/:id/pivotal/:membershipId',
  asyncHandler(ensureAuthenticated),
  asyncHandler(removeMemberPivotalHandler),
)

export const projects = router
