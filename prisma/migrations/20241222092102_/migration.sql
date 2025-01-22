/*
  Warnings:

  - The `memberSince` column on the `ProfilePlan` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" ALTER COLUMN "cellPhone" SET DATA TYPE TEXT,
ALTER COLUMN "zipCode" SET DATA TYPE TEXT,
DROP COLUMN "memberSince",
ADD COLUMN     "memberSince" TIMESTAMP(3);
