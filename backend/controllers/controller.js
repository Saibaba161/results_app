const Subject = require('../models/schema')
const mongoose = require('mongoose')


const getResult = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.Array.ObjectId.isValid(id)) {
        return res.status(404).json('Results does not exist')
    }

    const subject = await Subject.findById(id)

    if(!subject) {
        return res.status(404).json({error: "Data does not exist"})
    }

    res.status(200).json(subject)
}

module.exports = { getResult }