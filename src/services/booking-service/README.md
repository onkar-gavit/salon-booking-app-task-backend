# Booking Service

This service handles booking requests for the salon application.

## Features

- **POST /bookings** - Request a new booking
- Service duration lookup from PostgreSQL
- DynamoDB storage with REQUESTED state
- Overlap prevention for same location & time
- Firebase authentication integration
- Idempotency support

## API Endpoints

### Create Booking
```
POST /bookings
```

**Request Body:**
```json
{
  "serviceId": "uuid",
  "customerId": "uuid", 
  "locationId": "string",
  "startTime": "2024-01-01T10:00:00Z",
  "notes": "optional notes"
}
```

**Response:**
```json
{
  "message": "Booking requested successfully",
  "data": {
    "id": "uuid",
    "businessId": "string",
    "serviceId": "uuid",
    "customerId": "uuid",
    "locationId": "string",
    "startTime": "2024-01-01T10:00:00Z",
    "endTime": "2024-01-01T11:00:00Z",
    "status": "REQUESTED",
    "duration": 60,
    "notes": "optional notes",
    "createdAt": "2024-01-01T10:00:00Z",
    "updatedAt": "2024-01-01T10:00:00Z"
  }
}
```

## Setup

1. Install dependencies:
```bash
yarn install
```

2. Set up environment variables in `.env`:
```
DATABASE_URL=your_postgres_url
FIREBASE_SECRET_NAME=your_firebase_secret
FIREBASE_WEB_API_KEY=your_firebase_key
CUSTOM_AWS_REGION=your_aws_region
DYNAMODB_BOOKINGS_TABLE=BookingsTable
```

3. Create `serverless-id.json` with your HTTP API ID:
```json
{
  "http_api_id": "your_api_gateway_id"
}
```

4. Deploy:
```bash
yarn deploy
```

## Architecture

- **Handler**: `createBookingHandler.ts` - API Gateway handler
- **Service**: `bookingService.ts` - Business logic
- **Models**: Type definitions and interfaces
- **Utils**: DynamoDB client, error handling, response formatting
- **Schema**: Zod validation schemas

## Dependencies

- PostgreSQL (via Prisma) - Service and customer data
- DynamoDB - Booking storage
- Firebase - Authentication
- AWS Lambda - Serverless execution
