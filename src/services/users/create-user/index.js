const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' })

const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.createUser = async (req, res, next) => {
    const { name } = req.body;

    const userId = uuidv4();
    console.log(userId)
    try {
      const params = {
        TableName: USERS_TABLE,
        Item: {
          userId: userId,
          name: name,
        },
      };
      await dynamoDb.put(params).promise()
      res.status(201).json({ userId, name });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not create user' });
    }
}
