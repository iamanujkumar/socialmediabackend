const express = require('express');
const {
  UnFollowUser,
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  updateUser
} = require('../Controllers/UserController.js');
const authMiddleware = require('../MiddleWare/authMiddleware.js');

const router=express.Router();

router.get('/',getAllUsers)
router.get('/:id',getUser)
router.put('/:id',authMiddleware ,updateUser)
router.delete('/:id',authMiddleware,deleteUser)
router.put('/:id/follow',authMiddleware,followUser)
router.put('/:id/unfollow',authMiddleware,UnFollowUser)
export default router;