const { Router } = require('express');
const { home, details, search } = require('../controllers/catalogController');
const { about } = require('../controllers/aboutController');
const { createGet, createPost } = require('../controllers/movieController');
const { createGet: createCastGet, createPost: createCastPost } = require('../controllers/castController');
const { attachGet, attachPost } = require('../controllers/attachController');
const { notFound } = require('../controllers/404Controller');

const router = Router();

router.get('/', home)
router.get('/about', about)
router.get('/details/:id', details)
router.get('/attach/:id', attachGet)
router.post('/attach/:id', attachPost)
router.get('/create/movie', createGet)
router.post('/create/movie', createPost)
router.get('/create/cast', createCastGet)
router.post('/create/cast', createCastPost)
router.get('/search', search)
router.get('*', notFound)

module.exports = { router };