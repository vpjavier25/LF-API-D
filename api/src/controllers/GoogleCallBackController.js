
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res) => {
    // Successful authentication, redirect home.
    console.log("llegue aquí");
    const token = issueJWT(req.user);
    console.log(token);
  
    res.cookie("value", token.token, { httpOnly: false, maxAge: 1000 * 60 * 60 })
    res.cookie("success", "true", { httpOnly: false, maxAge: 500000000 }) 

    res.redirect('https://client-pf-seven.vercel.app/home');
}

module.exports = { GoogleCallBackController }
