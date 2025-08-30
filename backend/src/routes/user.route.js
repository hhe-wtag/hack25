import express from 'express';

import UserController from '../controllers/UserController.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.get('/profile', isAuthenticated, UserController.getCurrentUser);
router.put('/profile/update', isAuthenticated, UserController.updateUser);
router.put(
  '/profile/password-change',
  isAuthenticated,
  UserController.changePassword
);

export const UserRoutes = router;
