import express from 'express'
import asyncHandler from 'express-async-handler'
import { ensureAuthenticated } from '../../middlewares/ensure-authenticated'
import { addMemberProjectHandler } from './add-member-project'
import { fetchAccountMembershipsHandler } from './fetch-account-memberships'
import { fetchPivotalProjectsHandler } from './fetch-pivotal-projects'
import { removeMemberProjectHandler } from './remove-member-project'

const router = express.Router()

router.get('/pivotal/accounts', asyncHandler(ensureAuthenticated), asyncHandler(fetchAccountMembershipsHandler))
router.get('/pivotal/projects', asyncHandler(ensureAuthenticated), asyncHandler(fetchPivotalProjectsHandler))

router.get(
  '/pivotal/projects/:projectId/memberships',
  asyncHandler(ensureAuthenticated),
  asyncHandler(fetchAccountMembershipsHandler),
)

router.post(
  '/pivotal/projects/:projectId/memberships',
  asyncHandler(ensureAuthenticated),
  asyncHandler(addMemberProjectHandler),
)
router.get(
  '/pivotal/projects/:projectId/memberships/:membershipId',
  asyncHandler(ensureAuthenticated),
  asyncHandler(removeMemberProjectHandler),
)

export const pivotal = router
