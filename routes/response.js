const express = require("express");
const Response = require("../models/Response")

const router = express.Router();

router.get('/', async (req, res) => {
    const a2 = await Response.find();
    res.json(a2)
})

router.post('/', async (req, res) => {

    const newResponse = new Response({
        name: req.body.name,
        desc: req.body.desc
    })

    const a1 = await newResponse.save();
    res.json(a1)

})


module.exports = router;
