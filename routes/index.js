var express = require('express');
const { response } = require('../app');
var router = express.Router();
var {getUsers,addUser,getUserById,editUser,deleteUser} = require('../controller/controller')

/* GET home page. */
router.get('/',getUsers)
router.post('/add',addUser)
router.get('/:id',getUserById)
router.put('/EditUser',editUser)
router.delete('/:id',deleteUser)

module.exports = router;
