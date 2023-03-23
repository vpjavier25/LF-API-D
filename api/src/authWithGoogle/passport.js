require('dotenv').config();
const { User } = require("../db");
const { ID_CLIENT_GOOGLE, KEY_SECRET_GOOGLE } = process.env;
const { where } = require("sequelize");

var GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: ID_CLIENT_GOOGLE,
        clientSecret: KEY_SECRET_GOOGLE,
        callbackURL: "http://localhost:3001/auth/google/callback"
    },
        async function (accessToken, refreshToken, profile, done) {
            console.log(profile);
            done(null, profile);
            //     try {
            //         //const user = await User.findOne({ where: { name: profile.name } })

            //         if (!user) {
            //             done(null, profile)
            //         } else {

            //         }
            //     } catch (err) {
            //         done(err, null)
            //     }


        }
    ));
}