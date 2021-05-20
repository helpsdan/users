const UsersModel = require('../../../services/users/create-user/index')

exports.execute = (req, res) => {
  UsersModel.createUser(req, res)
}
