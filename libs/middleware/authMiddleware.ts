import { APIGatewayProxyEvent } from "aws-lambda";
import { verifyFirebaseToken } from "../../src/config/firebaseadmin";
import { UnauthorizedError } from "../../src/services/auth-service/src/utils/errors";
import { AuthenticatedEvent } from "../../src/services/auth-service/src/models/auth.models";

export const authMiddleware = () => {
  const before = async (request: {
    event: APIGatewayProxyEvent;
  }): Promise<void> => {
    const { event } = request;

    const authHeader =
      event.headers?.Authorization || event.headers?.authorization;

    if (!authHeader) {
      throw new UnauthorizedError("Missing Authorization header");
    }

    if (!authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("Invalid Authorization header format");
    }

    const idToken = authHeader.substring(7);

    try {
      const decodedToken = await verifyFirebaseToken(idToken);

      (event as AuthenticatedEvent).user = {
        uid: decodedToken.uid,
        email: decodedToken.email ?? "",
        name: decodedToken.name,
      };
    } catch (error) {
      console.error("Token verification failed:", error);
      throw new UnauthorizedError("Invalid or expired token");
    }
  };

  return { before };
};
