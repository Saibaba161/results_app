const User = require('../models/userSchema')

const loginUser = async (req, res) => {
    const {reg_id, password} = req.body

    try{
        const user = await User.login(reg_id, password)
        res.status(200).json({user})
        res.header('Allow-Access-Control-Origin', '*')
    }

    catch(error){
        res.status(401).json({error: error.message})
    }
}

module.exports = loginUser
