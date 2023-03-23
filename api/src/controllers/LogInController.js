const { User } = require("../db");
const { LogIn } = require("../handlers/LogInHandler");


const logInController = async (req, res) => {
    const {name, password} = req.body;
        
    try{ 
        const state = await LogIn(name, password);
        console.log(state)
        res.status(200).json(state);
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message);
    }
}

module.exports = { logInController };