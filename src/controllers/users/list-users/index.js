const UsersModel = require('../../../services/users/list-users/index')

const execute = (req, res) => {
  UsersModel.listUsers(req, res)
}

module.exports = {
  handler: execute,  
  execute
}
