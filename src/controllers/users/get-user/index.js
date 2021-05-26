const UsersModel = require('../../../services/users/get-user/index')

const execute = (req, res) => {
  UsersModel.getUser(req, res)
}

module.exports = {
  handler: execute,  
  execute
}