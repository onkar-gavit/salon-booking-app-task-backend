import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, QueryCommand, GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: process.env.CUSTOM_AWS_REGION });
export const docClient = DynamoDBDocumentClient.from(client);

export const WALKINS_TABLE = process.env.DYNAMODB_WALKINS_TABLE!;
export const BOOKINGS_TABLE = process.env.DYNAMODB_BOOKINGS_TABLE!;
