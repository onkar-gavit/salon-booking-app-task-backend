"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveIdempotencyRecord = exports.getIdempotencyRecord = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client = new client_dynamodb_1.DynamoDBClient({});
const docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.IDEMPOTENCY_TABLE || 'IdempotencyTable';
const getIdempotencyRecord = async (key) => {
    const result = await docClient.send(new lib_dynamodb_1.GetCommand({
        TableName: TABLE_NAME,
        Key: { id: key },
    }));
    return result.Item || null;
};
exports.getIdempotencyRecord = getIdempotencyRecord;
const saveIdempotencyRecord = async (key, response) => {
    await docClient.send(new lib_dynamodb_1.PutCommand({
        TableName: TABLE_NAME,
        Item: {
            id: key,
            statusCode: response.statusCode,
            body: response.body,
            createdAt: Date.now(),
        },
    }));
};
exports.saveIdempotencyRecord = saveIdempotencyRecord;
//# sourceMappingURL=idempotencyStore.js.map