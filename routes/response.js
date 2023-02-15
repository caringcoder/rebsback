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

router.delete('/:id', async (req, res) => {
    // res.send(req.params.id)
    const delUser = await Response.findByIdAndDelete(req.params.id)
    res.status(200).json("Response Deleted")

})


module.exports = router;
