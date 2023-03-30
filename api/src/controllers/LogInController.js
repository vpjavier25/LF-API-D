const { User } = require("../db");
const { LogIn } = require("../handlers/LogInHandler");


const logInController = async (req, res) => {
    const { name, password } = req.body;
    console.log(req.body);
    console.log(password);

    try {
        const state = await LogIn(name, password);
        // req.app.locals.token = state.token // con req.app.locals almaceno info para poder usarla en otro middleware
        // res.cookie("value", state.token, { httpOnly: false, maxAge: 1000 * 60 * 30, });
        res.cookie("success", "true", { httpOnly: false, maxAge: 1000 * 60 * 30, sameSite: "lax", secure: false});
        console.log(res.cookie);
        res.status(200).json(state.token);
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message);
    }
}

module.exports = { logInController };