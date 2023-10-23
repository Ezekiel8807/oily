import React from "react";
import express from "express";

//registration api
import {singleUser} from "../api/user.js";

//initialize express router
const Router = express.Router();


//authentication
Router.get('/:user', singleUser);
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
// Router.use('/auth', register );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );

export default Router;