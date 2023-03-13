import { Router } from 'express';
import { deleteUser, getAllUser, updateUser } from '../controller/user.controller';
// User Model

const router = Router();

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */

router.get('/', getAllUser);

/**
 * @route   GET api/users/:id
 * @desc    Get one users
 * @access  Private
 */
router.get('/', getOneUser);


/**
 * @route   PATCH api/users/:id
 * @desc    Update one users
 * @access  Private
 */
router.get('/', updateUser);

/**
 * @route   DELETE api/users/:id
 * @desc    Delete one users
 * @access  Private
 */
router.get('/', deleteUser);

export default router;
