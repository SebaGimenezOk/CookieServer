const express = require('express');

const router = express.Router();

// setea la cookie
router.get('/', (_req, res) => {
    res.cookie('name', 'chango', { maxAge: 5000, signed: true }).send('Cookie set');
})
// borrar cookies
router.get('/clear/:name', (req, res) => {
    const { name } = req.params;
    res.clearCookie(name).send('cookie deleted');
})

// trae todas las cookies (el signedCookies para las firmadas)
router.get('/get', (req, res) => {
    res.status(200).json(req.signedCookies)
})
module.exports = router;