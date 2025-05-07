const express =  require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.use('/:slug', userController.show);  
router.use('/', userController.index);

// userController.addNewUser = (req, res) => {
//     res.render('users/addNewUser');
// }
// userController.addUser = (req, res) => {
//     res.render('users/addUser');
// }

// userController.show = (req, res) => {
//     res.render('users/show');
// }
// userController.update = (req, res) => {
//     res.render('users/update');
// }
// userController.delete = (req, res) => {
//     res.render('users/delete');
// }
// userController.search = (req, res) => {
//     res.render('users/search');
// }


module.exports = router;
