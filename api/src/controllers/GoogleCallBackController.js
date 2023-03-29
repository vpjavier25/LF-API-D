
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res) => {
    // Successful authentication, redirect home.
    const token = issueJWT(req.user);
  
    res.cookie("value", token.token, { httpOnly: false, maxAge: 1000 * 60 * 60 })
    res.cookie("success", "true", { httpOnly: false, maxAge: 500000000 }) 
    console.log(res.cookie);
    res.redirect('https://client-pf-seven.vercel.app/home');
}

module.exports = { GoogleCallBackController }
