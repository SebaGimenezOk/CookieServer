const express = require('express');
const statusCode = require('http-status');
const router = express.Router();
const authMiddleware= require('../../middlewares/auth.middleware');


// -------------
// router.get('/', (req, res) => {
//     req.session.name = "albertitere"
//     res.status(200).json(req.session.name)
// })
// -------------------






// hacer el signin----------------------
router.post('/signin', (req, res) => {
    const USERNAME = 'rupertinsky'
    const PASSWORD = '123'
    const {userNameInput, passwordInput}= req.body;
    if(!userNameInput||!passwordInput){
        return res.status(400).json({
            success:false,
            message: 'Username or Password missing'
        })
    }
    if(userNameInput != USERNAME || passwordInput!=PASSWORD){
        return res.status(403).json({
            success:false,
            message: `tiene un error de tipo: ${statusCode[403]}, bad username or password `
        })
    }
    req.session.USERNAME=userNameInput;
    req.session.PASSWORD=passwordInput;
    res.status(200).json({
        success:true,
        message:`welcome to the JaguarHouse`

    })
})
// ----------------------------------------







// hacer el contador------(el authMiddle chequea que este logueado)------------
router.get('/', authMiddleware, (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.status(200).send(`usted ${req.session.USERNAME} ha ingresado al server ${req.session.contador}veces`)
    }
    else {
        req.session.contador = 1;
        res.status(200).send(`bienvenido  ${req.session.name}`)
    }
})
// -----------------------------------------






// hacer el destroy de sesion-------------
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
        res.status(200).json({
            success: true,
            message: "session destroyed"
        })

    })
})
// ------------------------------------

module.exports = router;