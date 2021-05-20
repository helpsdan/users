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

exports.getUser = (req, res) => {
    try {
        const params = {
            TableName: USERS_TABLE,
            Key: {
                userId: req.params.userId,
            },
        }
      await dynamoDb.get(params).promise()
      res.status(204)
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not create user' })
    }
}
