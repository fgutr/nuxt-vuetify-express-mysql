import { Router } from 'express'

import users from './controllers/users/users'

const router = Router()

// Add USERS Routes
router.use(users)

export default router