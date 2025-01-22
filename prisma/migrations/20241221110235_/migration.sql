/*
  Warnings:

  - You are about to drop the column `email` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `ProfilePlan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" DROP COLUMN "email",
DROP COLUMN "userName";
