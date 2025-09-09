import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.IDEMPOTENCY_TABLE || 'IdempotencyTable';

export const getIdempotencyRecord = async (key: string) => {
  const result = await docClient.send(
    new GetCommand({
      TableName: TABLE_NAME,
      Key: { id: key },
    })
  );

  return result.Item || null;
};

export const saveIdempotencyRecord = async (key: string, response: any) => {
  await docClient.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        id: key,
        statusCode: response.statusCode,
        body: response.body,
        createdAt: Date.now(),
      },
    })
  );
};
