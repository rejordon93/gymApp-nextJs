/*
  Warnings:

  - The `workout` column on the `UserWorkout` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserWorkout" DROP COLUMN "workout",
ADD COLUMN     "workout" TEXT[];
