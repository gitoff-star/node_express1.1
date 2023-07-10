const express = require('express');
const router= express.Router();
const data = require('../data');
const{
    peopleLogin,
    getPeoples,
    addPeoples
}= require ('../controllers/people')

// can be work with this 

// router.get('/',getPeoples)
// router.post('/login',peopleLogin)


//can be work with this url is localhost:3000/api/people/ for get and post request
router.route('/').get(getPeoples).post(addPeoples);
// can be work with this url is lo                                                                                                          calhost:3000/api/people/login for  post request
router.route('/login').post(peopleLogin);


module.exports = router;
