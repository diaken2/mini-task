import { Router } from 'express';
import { searchUser } from '../routes/controllers/searchController.js';
const router = Router();
router.post('/search', searchUser);
export default router;
