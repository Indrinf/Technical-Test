import { Router } from 'express';
import { borrowBookHandler } from '../controllers/bookController';

const router = Router();

/**
 * @swagger
 * /api/borrow:
 *   post:
 *     summary: Borrow a book
 *     description: Allows a member to borrow a book.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *                 example: M001
 *               bookCode:
 *                 type: string
 *                 example: JK-45
 *     responses:
 *       200:
 *         description: Book borrowed successfully
 *       400:
 *         description: Error occurred while borrowing book
 */
router.post('/borrow', borrowBookHandler);

export default router;
