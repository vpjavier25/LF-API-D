const { validPassword, issueJWT } = require("../authWithJWT/utils")
const { User } = require("../db");

async function LogIn(name, password) {

    const user = await User.findOne({ where: { name: name } });

    if (!user) {
        return "user not found";
    }

    const isValid = validPassword(password, user.hash, user.salt);

    if (isValid) {

        const tokenObject = issueJWT(user);

        return tokenObject.token

    } else {

        return "you entered the wrong password";

    }
}

module.exports = { LogIn };