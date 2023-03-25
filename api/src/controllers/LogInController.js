const { User } = require("../db");
const { LogIn } = require("../handlers/LogInHandler");


const logInController = async (req, res, next) => {
    // const {name, password} = req.body;
        
    // try{ 
    //     const state = await LogIn(name, password, res);
    //     console.log(state)
    //     res.tokenName = state
    //     next();
    // } catch (error) {
    //     console.log(error)
    //     res.status(400).json(error.message);
        
    // }
    res.redirect('/');
    res.end();
}

module.exports = { logInController };