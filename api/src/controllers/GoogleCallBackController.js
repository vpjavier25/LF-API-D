
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res) => {
    // Successful authentication, redirect home.
    const token = issueJWT(req.user);
    console.log("llegue aquí");
    res.cookie("value", token.token, { domain: '.client-pf-seven.vercel.app', path: '/home', secure: true, httpOnly: false, maxAge: 1000 * 60 * 60 })
    res.cookie("success", "true", { httpOnly: false, maxAge: 500000000 }) 
    res.status(200).json("hola llegue");
}

module.exports = { GoogleCallBackController }
