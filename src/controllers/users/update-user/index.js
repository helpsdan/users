const UsersModel = require('../../../services/users/update-user/index')

const execute = (req, res) => {
  UsersModel.updateUser(req, res)
}

module.exports = {
  handler: execute,  
  execute
}