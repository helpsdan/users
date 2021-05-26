const UsersModel = require('../../../services/users/create-user/index')

const execute = (req, res, next) => {
  UsersModel.createUser(req, res, next)
}

module.exports = {
  handler: execute,  
  execute
}