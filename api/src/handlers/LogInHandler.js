const { validPassword, issueJWT } = require("../authWithJWT/utils")
const { User } = require("../db");

async function LogIn(name, password) {

    const user = await User.findOne({where: {name:name}});
    console.log(user)

    if (!user) {
        return {success: false, message: "user not found"};
    }

    const isValid = validPassword(password, user.hash, user.salt);

    if (isValid) {

        const tokenObject = issueJWT(user);

        return { success: true, token: tokenObject.token, expiresIn: tokenObject.expires };

    } else {

         return {success: false, message: "you entered the wrong password" };

    }
}

module.exports = {LogIn};