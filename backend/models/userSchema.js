const mongoose = require('mongoose')
const Schema = mongoose.Schema

const marks = require('./schema')

const userSchema = new Schema({
    reg_id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.login = async function(reg_id, password) {
    //Validation
    if(!reg_id || !password) {
        throw new Error('Please fill in all the fields')
    }

    const exists = await this.findOne({reg_id})

    if(!exists) {
        throw new Error('Incorrect registration id')
    }

    if(exists) {
        if(password === exists.password) {
            const user = await marks.data(reg_id)
            return user
        }
        else{
            throw new Error("Incorrect Password")
        }
    }
}

module.exports = mongoose.model('User', userSchema)