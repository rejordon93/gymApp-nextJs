/*
  Warnings:

  - You are about to drop the column `cellPhone` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the column `currentStatus` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the column `homeClub` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the column `memberSince` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `ProfilePlan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" DROP COLUMN "cellPhone",
DROP COLUMN "city",
DROP COLUMN "currentStatus",
DROP COLUMN "homeClub",
DROP COLUMN "memberSince",
DROP COLUMN "state",
DROP COLUMN "zipCode";
