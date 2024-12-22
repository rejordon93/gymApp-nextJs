/*
  Warnings:

  - The `memberSince` column on the `ProfilePlan` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" ALTER COLUMN "city" DROP DEFAULT,
ALTER COLUMN "currentStatus" DROP DEFAULT,
ALTER COLUMN "homeClub" DROP DEFAULT,
DROP COLUMN "memberSince",
ADD COLUMN     "memberSince" INTEGER,
ALTER COLUMN "state" DROP DEFAULT,
ALTER COLUMN "cellPhone" DROP DEFAULT,
ALTER COLUMN "zipCode" DROP DEFAULT;
