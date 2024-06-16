const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dataSchema = new Schema({
    reg_id: {
        type: String,
        required: true
    },
    sub1: {
        type: String,
        required: true
    },
    sub2: {
        type: String,
        required: true
    },
    sub3: {
        type: String,
        required: true
    },
    sub4: {
        type: String,
        required: true
    },
    sub5: {
        type: String,
        required: true
    }
})

dataSchema.statics.data = async function(reg_id) {
    const marks = await this.findOne({ reg_id })
    return marks
}

module.exports = mongoose.model('Subject', dataSchema)