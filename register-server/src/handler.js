const { randomUUID } = require("crypto");

class RegisterService {
  constructor(dynamoSvc) {
    this.dynamoSvc = dynamoSvc;

    this.tableName = "Registers";
  }

  async getAll() {
    try {
      const result = await this.dynamoSvc
        .scan({
          TableName: this.tableName,
        })
        .promise();

      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Error finding registers" }),
      };
    }
  }

  async create(data) {
    try {
      const params = this.createParams(JSON.parse(data));
      await this.dynamoSvc.put(params).promise();

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Register created successfully" }),
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Error creating a register" }),
      };
    }
  }

  createParams(data) {
    const params = {
      TableName: this.tableName,
      Item: {
        id: randomUUID(),
        name: data.name,
        description: data.description,
      },
    };

    return params;
  }
}

module.exports = RegisterService;
