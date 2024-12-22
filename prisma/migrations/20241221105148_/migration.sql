/*
  Warnings:

  - You are about to drop the column `zipPostal` on the `ProfilePlan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" DROP COLUMN "zipPostal",
ADD COLUMN     "postalCode" TEXT;
