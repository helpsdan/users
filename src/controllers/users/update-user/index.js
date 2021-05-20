const UsersModel = require('../../../services/users/update-user/index')

exports.execute = (req, res) => {
  UsersModel.updateUser(req, res)
}
