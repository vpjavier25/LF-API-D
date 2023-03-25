
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res, next ) =>{
    // Successful authentication, redirect home.
    const token = issueJWT(req.user);
    //console.log(token)

    res.cookie("tokenName", token.token, {httpOnly: true , maxAge: 500000000, sameSite: "lax"})
    res.cookie("success", "true", {httpOnly: true , maxAge: 500000000, sameSite: "lax"})
    
    //res.status(200).json({success:true, value: token.token})

    res.redirect('http://localhost:3000/home');
}

module.exports = { GoogleCallBackController }
