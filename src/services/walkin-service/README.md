# Walk-in Service

This service handles walk-in appointments for the salon booking system.

## Features

- **POST /walkins**: Create a new walk-in request
  - Saves walk-in in DynamoDB with status = REQUESTED
  - Returns estimated wait time based on pending bookings and walk-ins
  - Validates customer, service, and location exist in PostgreSQL

## API Endpoints

### Create Walk-in
```
POST /walkins
```

**Request Body:**
```json
{
  "locationId": "uuid",
  "customerId": "uuid", 
  "serviceId": "uuid",
  "notes": "optional notes"
}
```

**Response:**
```json
{
  "message": "Walk-in requested successfully",
  "data": {
    "walkin": {
      "id": "uuid",
      "locationId": "uuid",
      "customerId": "uuid",
      "serviceId": "uuid",
      "businessId": "uuid",
      "requestedTime": "2023-09-10T12:30:00.000Z",
      "estimatedWaitTime": 45,
      "status": "REQUESTED",
      "notes": "optional notes",
      "createdAt": "2023-09-10T12:30:00.000Z",
      "updatedAt": "2023-09-10T12:30:00.000Z"
    },
    "estimatedWaitTime": 45
  }
}
```

## Database Schema

### DynamoDB - WalkinsTable
- **Primary Key**: id (String)
- **GSI**: LocationTimeIndex (locationId, requestedTime)
- **Attributes**: locationId, customerId, serviceId, businessId, requestedTime, estimatedWaitTime, status, notes, createdAt, updatedAt

### PostgreSQL Models Used
- **Customer**: Validates customer exists and belongs to business
- **Service**: Gets service duration for wait time calculation
- **Location**: Validates location exists and belongs to business

## Environment Variables

```env
DATABASE_URL=postgresql://username:password@localhost:5432/salon_db
CUSTOM_AWS_REGION=us-east-1
FIREBASE_SECRET_NAME=firebase-admin-key
FIREBASE_WEB_API_KEY=your-firebase-web-api-key
DYNAMODB_WALKINS_TABLE=WalkinsTable
DYNAMODB_BOOKINGS_TABLE=BookingsTable
```

## Deployment

```bash
# Install dependencies
npm install

# Deploy to AWS
npm run deploy

# Run locally
npm run dev
```

## Wait Time Calculation

The estimated wait time is calculated by:
1. Querying all pending bookings for today at the location
2. Querying all pending walk-ins for today at the location  
3. Summing the duration of all pending services
4. Returning total pending duration in minutes
