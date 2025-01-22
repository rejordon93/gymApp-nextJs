/*
  Warnings:

  - The `memberSince` column on the `ProfilePlan` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" DROP COLUMN "memberSince",
ADD COLUMN     "memberSince" INTEGER;
