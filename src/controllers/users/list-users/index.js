const UsersModel = require('../../../services/users/list-users/index')

exports.execute = (req, res) => {
  UsersModel.listUsers(req, res)
}
