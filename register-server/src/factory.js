const AWS = require("aws-sdk");
const RegisterService = require("./handler");

const isLocal = process.env.IS_OFFLINE;

if (isLocal) {
  AWS.config.update({
    region: "us-east-1",
    credentials: {
      accessKeyId: "test",
      secretAccessKey: "test",
    },
  });
}

const dynamoSvc = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://localhost:4566",
});
const registerService = new RegisterService(dynamoSvc);

module.exports = registerService;
