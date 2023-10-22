import React from "react";
import express from "express";

//administrators api
import { adminLogin, createAdmin, getAllAdmins } from "../api/admin.js";
import { allOrder, declineOrder, removeOrder, setOrder } from "../api/order.js";

//initialize express router
const Router = express.Router();


// ======= Admin controller ================
Router.get("/admins", getAllAdmins );

// ======= Admin controller ================
Router.post('/login', adminLogin );
// Router.get('/auth', authRouter );
// Router.update('/auth', authRouter );


//Registration
Router.post('/register', createAdmin );
// Router.get('/register', authRouter );
// Router.update('/register', authRouter );


//Order routes
Router.get('/order', allOrder );
Router.post('/order', setOrder );
Router.get('/order/:id', removeOrder);
Router.put('/order/:id', declineOrder);


export default Router;