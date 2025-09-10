import { APIGatewayProxyResult } from "aws-lambda";
import { createBookingSchema } from "../schema/booking.schema";
import { BookingService } from "../service/bookingService";
import { formatResponse } from "../utils/responseFormat";
import { handleError } from "../utils/errors";
import { AuthenticatedBookingEvent } from "../models/booking.models";
import { authMiddleware } from "../../../../../libs/middleware/authMiddleware";
import { validateRequest } from "../../../../../libs/middleware/validateRequest.middleware";
import { idempotencyMiddleware } from "../../../../../libs/middleware/idempotencyMiddleware";
import middy from "@middy/core";

const bookingService = new BookingService();

const baseHandler = async (
  event: AuthenticatedBookingEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // uid already injected by authMiddleware
    const { uid } = event.user;

    // parsed body already validated by validateRequest middleware
    const parsed = JSON.parse(event.body || '{}') as {
      serviceId: string;
      customerId: string;
      locationId: string;
      startTime: string;
      notes?: string;
    };

    // Create booking
    const booking = await bookingService.createBooking(uid, parsed);

    return formatResponse(201, {
      message: "Booking requested successfully",
      data: booking,
    });
  } catch (error) {
    const { statusCode, message, details } = handleError(error);
    return formatResponse(statusCode, { message, details });
  } finally {
    // Clean up Prisma connection
    await bookingService.disconnect();
  }
};

// Wrap with Middy + middlewares
export const handler = middy(baseHandler)
  .use(authMiddleware())
  .use(validateRequest(createBookingSchema))
  .use(idempotencyMiddleware());
