const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' })

const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.deleteUser = async (req, res) => {
    try {
        const params = {
            TableName: USERS_TABLE,
            Key: {
                userId: req.params.userId,
            },
        }
      await dynamoDb.delete(params).promise()
      res.status(204).send()
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not delete user' })
    }
}
