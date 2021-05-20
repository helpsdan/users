const UsersModel = require('../../../services/users/get-user/index')

exports.execute = (req, res) => {
  UsersModel.getUser(req, res)
}
