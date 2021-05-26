const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' })

const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.listUsers = async (req, res) => {
    try {
        const params = {
          TableName: USERS_TABLE,
        }
        const result = await dynamoDb.scan(params).promise()
        if (result.Items) {
          res.status(200).json({
            users: result.Items
          });
        } else {
          res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Could not list user' });
    }
}
