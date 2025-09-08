import { prisma } from "../../../../../libs/common-utils/prismaclient/prismaclient";
import { RegisterInput } from "../schema/registerSchema";
import { ConflictError, DatabaseError } from "../utils/errors";

export const registerUser = async (data: RegisterInput & { uid: string }) => {
  try {
    // Check if user exists by uid or email
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ firebaseUid: data.uid }, { email: data.email }],
      },
    });

    if (existingUser) {
      throw new ConflictError("User already exists");
    }

    // Create new user
    const user = await prisma.user.create({
      data: {
        firebaseUid: data.uid,
        email: data.email,
        name: data.name,
      },
    });

    return user;
  } catch (error) {
    throw new DatabaseError("Failed to register user");
  }
};
