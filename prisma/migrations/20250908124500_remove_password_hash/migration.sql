-- Remove passwordHash column from User table since we're using Firebase Auth
ALTER TABLE "public"."User" DROP COLUMN "passwordHash";
