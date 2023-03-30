const { validPassword, issueJWT } = require("../authWithJWT/utils")
const { User } = require("../db");

async function LogIn(name, password) {

    console.log(password);
    const user = await User.findOne({ where: { user_name: name } });

    if (!user) {
        return {success: false, msg: "user not found"};
    }

    console.log(user);
    console.log(user.salt);

    const isValid = validPassword(password, user.hash, user.salt);
    if (isValid) {
        const tokenObject = issueJWT(user);
        return {token:tokenObject.token, success:true, msg:"you are in"}
    } else {
        return { success: false, msg:"you entered the wrong password"};
    }
}

module.exports = { LogIn };