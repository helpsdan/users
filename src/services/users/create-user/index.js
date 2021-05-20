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

exports.createUser = async (req, res) => {
    const { name } = req.body;
    try {
      const params = {
        TableName: USERS_TABLE,
        Item: {
          userId: uuidv4(),
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
