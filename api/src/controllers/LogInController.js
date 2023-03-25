const { User } = require("../db");
const { LogIn } = require("../handlers/LogInHandler");


// const logInController = async (req, res, next) => {
//     // const {name, password} = req.body;

//     // try{ 
//     //     const state = await LogIn(name, password, res);
//     //     console.log(state)
//     //     res.tokenName = state
//     //     next();
//     // } catch (error) {
//     //     console.log(error)
//     //     res.status(400).json(error.message);

//     // }
//     res.cookie("value", "res.tokenName", { maxAge: 5000 });
//     res.redirect("http://localhost:3000/home")
//     res.end();
// }

const logInController = async (req, res) => {
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
    //res.cookie("value", "res.tokenName", { maxAge: 10000, sameSite: "none", domain:'.localhost:3000', secure: true});
    
    res.send("hola")
}

module.exports = { logInController };