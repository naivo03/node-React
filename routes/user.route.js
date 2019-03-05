const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/test', user_controller.test);
router.post('/create', user_controller.user_create); //CREATE
router.get('/:id', user_controller.user_details); //READ
router.put('/:id/update', user_controller.user_update); //UPDATE
router.delete('/:id/delete', user_controller.user_delete); //DELETE


module.exports = router;