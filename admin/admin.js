const express = require('express');
const router = express.Router();


const User = require('../models/User');


router.get('/admin', ensureAuthenticated, (req, res) => res.render('admin'));


