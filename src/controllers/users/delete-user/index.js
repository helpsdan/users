const UsersModel = require('../../../services/users/delete-user/index')

const execute = (req, res) => {
  UsersModel.deleteUser(req, res)
}

module.exports = {
  handler: execute,  
  execute
}