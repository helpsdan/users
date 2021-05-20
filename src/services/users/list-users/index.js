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

exports.listUsers = (req, res) => {
    try {
        const params = {
          TableName: USERS_TABLE,
          ProjectionExpression: "userId, name",
        }
        const result = await dynamoDb.scan(params).promise()
        if (result.Items) {
          res.status(200).json(JSON.stringify({
            users: result.Items
          }));
        } else {
          res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Could not get user' });
    }
}
