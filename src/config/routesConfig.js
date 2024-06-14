const { Router } = require('express');
const { isGuest, isUser } = require('../middlewares/guards');
const { home, details, search } = require('../controllers/catalogController');
const { about } = require('../controllers/aboutController');
const { createGet, createPost, editGet, editPost, deleteGet, deletePost } = require('../controllers/movieController');
const { createGet: createCastGet, createPost: createCastPost } = require('../controllers/castController');
const { attachGet, attachPost } = require('../controllers/attachController');
const { notFound } = require('../controllers/404Controller');
const { registerGet, registerPost, loginGet, loginPost, logout } = require('../controllers/userController');

const router = Router();

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

router.get('/details/:id', details);
router.get('/attach/:id', isUser(), attachGet);
router.post('/attach/:id', isUser(), attachPost);
router.get('/edit/:id', isUser(), editGet);
router.post('/edit/:id', isUser(), editPost);
router.get('/delete/:id', isUser(), deleteGet);
router.post('/delete/:id', isUser(), deletePost);

router.get('/create/movie', isUser(), createGet);
router.post('/create/movie', isUser(), createPost);
router.get('/create/cast', isUser(), createCastGet);
router.post('/create/cast', isUser(), createCastPost);

router.get('/register', isGuest(), registerGet);
router.post('/register', isGuest(), registerPost);
router.get('/login', isGuest(), loginGet);
router.post('/login', isGuest(), loginPost);
router.get('/logout', logout);

router.get('*', notFound);

module.exports = { router };