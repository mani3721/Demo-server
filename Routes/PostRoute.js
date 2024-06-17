const express = require('express');
const { Post, Get, Update, Delete } = require('../Controllers/PostController.js');


const router = express.Router();

router.post('/new', Post);
router.get('/get', Get);
router.put('/update/:id', Update);
router.delete('/delete/:id', Delete);

module.exports = router;
