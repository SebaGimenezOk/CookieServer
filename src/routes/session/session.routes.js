const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//     req.session.name = "albertitere"
//     res.status(200).json(req.session.name)
// })

router.get('/', (req, res) => {
    if(!req.session.contador){
        req.session.contador= 0;
    }
    req.session.contador= req.session.contador+1;
    res.status(200).send(`usted ha ingresado al server ${req.session.contador}veces`)
})

module.exports = router;