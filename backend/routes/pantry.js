import express from 'express'
const router = express.Router();
import * as pantryController from '../controllers/pantryController.js';
import authMiddleware from '../middleware/auth.js'

//All routes are proteced
router.use(authMiddleware);

router.get('/', pantryController.getPantryItems);
router.get('/stats', pantryController.getPantryStats);
router.post('/expiring-soon', pantryController.getExpiringSoon);
router.put('/', pantryController.addPantryItem);
router.put('/:id', pantryController.updatePantryItem);
router.put('/:id', pantryController.deletePantryItem);

export default router;