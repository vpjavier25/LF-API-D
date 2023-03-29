require('dotenv').config();
const { User } = require("../db");
const { ID_CLIENT_GOOGLE, KEY_SECRET_GOOGLE } = process.env;
const { where } = require("sequelize");

var GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: ID_CLIENT_GOOGLE,
        clientSecret: KEY_SECRET_GOOGLE,
        callbackURL: "https://pf-api-production.up.railway.app/auth/google/callback"
    },
        async function (accessToken, refreshToken, profile, cb) {

            try {
                let user = await User.findOne({ where: { user_email: profile.emails[0].value } })
                if (!user) {

                    user = {
                        googleId: profile.id,
                        user_name: profile.name.givenName,
                        user_lastname: profile.name.familyName,
                        user_email: profile.emails[0].value,
                        
                    }
                    const newUser = await User.create(user)

                    cb(null, profile);
                } else {
                    cb(null, false);
                }
            } catch (err) {
                cb(err, null)
            }
        }
    ));
}