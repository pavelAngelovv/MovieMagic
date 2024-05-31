const { Router } = require('express');
const { home, details, search } = require('../controllers/catalogController');
const { about } = require('../controllers/aboutController');
const { createGet, createPost } = require('../controllers/movieController');
const { notFound } = require('../controllers/404Controller');

const router = Router();

router.get('/', home)
router.get('/about', about)
router.get('/details/:id', details)
router.get('/create', createGet)
router.post('/create', createPost)
router.get('/search', search)
router.get('*', notFound)

module.exports = { router };