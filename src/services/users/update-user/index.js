const { v4: uuidv4 } = require('uuid')

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' })

let options = {}
if(process.env.IS_OFFLINE){
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000"
  }
}

const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient(options);

exports.updateUser = async (req, res) => {
    const { userid, name } = req.body;
    try {
      const params = {
        TableName: USERS_TABLE,
        Item: {
          userId: userid,
          name: name,
        },
      };
      await dynamoDb.put(params).promise()
      res.status(201).json({ userId, name });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not update user' });
    }
}