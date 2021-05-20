const UsersModel = require('../../../services/users/delete-user/index')

exports.execute = (req, res) => {
  UsersModel.deleteUser(req, res)
}
