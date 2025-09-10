import { APIGatewayProxyResult } from "aws-lambda";
import { confirmBookingSchema } from "../schema/confirmBooking.schema";
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
    
    // Get booking ID from path parameters
    const bookingId = event.pathParameters?.id;
    if (!bookingId) {
      return formatResponse(400, { message: "Booking ID is required" });
    }

    // Confirm booking
    const booking = await bookingService.confirmBooking(bookingId, uid);

    return formatResponse(200, {
      message: "Booking confirmed successfully",
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
  .use(validateRequest(confirmBookingSchema))
  .use(idempotencyMiddleware());
