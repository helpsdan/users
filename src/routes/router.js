const express = require("express");
const router = express.Router();

const createUser = require('../controllers/users/create-user/index')
const getUser = require('../controllers/users/get-user/index')
const deleteUser = require('../controllers/users/delete-user/index')
const updateUser = require('../controllers/users/update-user/index')
const listUsers = require('../controllers/users/list-users/index')

router.post("/api/v1/user", createUser.execute)
router.put("/api/v1/user", updateUser.execute)
router.get("/api/v1/user/:userId", getUser.execute)
router.get("/api/v1/user", listUsers.execute)
router.delete("/api/v1/user/:userId", deleteUser.execute)

module.exports = router