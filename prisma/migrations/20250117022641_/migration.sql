/*
  Warnings:

  - You are about to drop the column `completed` on the `UserWorkout` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserWorkout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserWorkout" DROP COLUMN "completed",
DROP COLUMN "createdAt";
