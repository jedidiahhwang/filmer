const User = require("../mongoose/setup.js");

/*
    Every endpoint has a preliminary check to make sure there is a session. Even though you
    can assume that there is always a session to access recipes, this is just a safety check, 
    along with using Postman.
*/

module.exports = {
    addMovie: async (req, res) => {
        if(!req.session.user) {
            return res.status(400).send(req.session.user);
        } else {
            // Grab the current user using the session user's email.
            const currentUser = await User.findOne({email: req.session.user.email});

            currentUser.movies.push(req.body); // Assuming the data is saved on body.
            currentUser.save();

            req.session.user = currentUser;

            return res.status(200).send(currentUser);
        }
    }
}