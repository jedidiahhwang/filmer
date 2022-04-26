const express = require("express");
const session = require("express-session");
const cors = require("cors");

require("./mongoose/setup.js");

const {register, login} = require("./controllers/authController.js");

const app = express();

app.use(
    session({
        resave: true, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
        saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store. False is useful when you need to require permission before setting a cookie.
        secret: "letterbox-inspired-movie-tracker-app", // Kind of a hash for verifying cookie sessions.
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    })
)

app.use(cors());
app.use(express.json());

app.post("/auth/register", register);
app.post("/auth/login", login);

app.listen(5005, () => console.log("Server is running on 5005"));