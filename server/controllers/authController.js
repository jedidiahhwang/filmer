const bcrypt = require("bcrypt");
const User = require("../mongoose/setup.js");

module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body;

        let results = await User.findOne({email: email});

        if(results) {
            return res.status(409).send("User already exists");
        }

        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        req.body.password = passwordHash;

        let myData = new User(req.body);
        const {_id, firstName, lastName, email: userEmail, movies} = myData;

        myData.save()
            .then(() => {
                let returnUser = {
                    _id,
                    firstName,
                    lastName,
                    userEmail,
                    movies
                  }
                req.session.user = returnUser;
                res.send("User saved to database");
            })
            .catch((err) => {
                console.log(err);
                res.status(400).send(err);
            });
    },
    login: async(req, res) => {
        const {email, password} = req.body;

        let results = await User.findOne({email: email});
      
        if(!results) {
            return res.status(400).send("User does not exist");
        } else if(req.session.user) {
            return res.status(400).send("Someone is already logged in");
        };

        const {_id, firstName, lastName, movies} = results;
      
        const isAuthenticated = bcrypt.compareSync(password, results.password);
      
        if(!isAuthenticated) {
          return res.status(403).send("Incorrect password");
        }
      
        // Create a new object to return with the password filtered out, so front end doesn't get hash.
        let returnUser = {
          _id,
          firstName,
          lastName,
          email,
          movies
        }

        req.session.user = returnUser;
      
        return res.status(200).send(returnUser);
    }
}