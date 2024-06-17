const express = require('express');
const { Post, Get, Update, Delete, GetOnePost } = require('../Controllers/PostController.js');


const router = express.Router();

router.post('/new', Post);
router.get('/get', Get);
router.get('/:id', GetOnePost);
router.put('/update/:id', Update);
router.delete('/delete/:id', Delete);

module.exports = router;
