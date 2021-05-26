const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' })

const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.updateUser = async (req, res) => {
    const { userId, name } = req.body;
    try {
      const params = {
        TableName: USERS_TABLE,
        Item: {
          userId: userId,
          name: name,
        },
      };
      const result = await dynamoDb.get(params).promise()
      if (result.Item) {
        await dynamoDb.put(params).promise()
        res.status(200).json({ userId, name });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not update user' });
    }
}