import { prisma } from "../../../../../libs/common-utils/prismaclient/prismaclient";
import { LoginInput } from "../schema/loginSchema";
import { UnauthorizedError, NotFoundError, DatabaseError } from "../utils/errors";
import { signInWithPassword, createCustomToken } from "../../../../config/firebaseadmin";

export const loginUser = async (data: LoginInput) => {
  try {
    // Authenticate with Firebase
    const authData = await signInWithPassword(data.email, data.password);
    
    const firebaseUid = authData.localId;
    
    // Get user from database using Firebase UID
    const dbUser = await prisma.user.findUnique({
      where: {
        firebaseUid: firebaseUid,
      },
      select: {
        id: true,
        firebaseUid: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    if (!dbUser) {
      throw new NotFoundError("User not found in database");
    }

    // Create a custom JWT token with user claims
    const customToken = await createCustomToken(firebaseUid, {
      userId: dbUser.id,
      email: dbUser.email,
      name: dbUser.name,
    });

    return {
      user: {
        id: dbUser.id,
        firebaseUid: dbUser.firebaseUid,
        email: dbUser.email,
        name: dbUser.name,
        createdAt: dbUser.createdAt,
      },
      token: customToken, // Custom JWT token
      firebaseToken: authData.idToken, // Original Firebase token (optional)
      expiresIn: authData.expiresIn,
      tokenType: "Bearer",
    };
  } catch (error: any) {
    // Handle Firebase auth errors
    if (error.message?.includes('INVALID_PASSWORD') || error.message?.includes('EMAIL_NOT_FOUND')) {
      throw new UnauthorizedError("Invalid email or password");
    }
    if (error.message?.includes('INVALID_EMAIL')) {
      throw new UnauthorizedError("Invalid email format");
    }
    if (error.message?.includes('USER_DISABLED')) {
      throw new UnauthorizedError("User account has been disabled");
    }
    if (error.message?.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
      throw new UnauthorizedError("Too many failed login attempts. Please try again later");
    }
    if (error.message?.includes('INVALID_LOGIN_CREDENTIALS')) {
      throw new UnauthorizedError("Invalid email or password");
    }
    
    // Handle our custom errors
    if (error instanceof UnauthorizedError || error instanceof NotFoundError) {
      throw error;
    }
    
    throw new DatabaseError("Login failed: " + error.message);
  }
};
