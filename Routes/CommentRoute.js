const express = require('express');
const { createComment, getCommentsByPostId } = require('../Controllers/CommentController.js');

const router = express.Router()

router.post('/', createComment); // Create a new comment
router.get('/:postId', getCommentsByPostId); // Get comments for a specific post

module.exports= router;