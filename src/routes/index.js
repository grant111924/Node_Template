import express from 'express';
import user from './user.js';
const router = express.Router();

// router.use('/auth', auth);
router.use('/user', user);
// router.use('/camera', camera);


export default router;
