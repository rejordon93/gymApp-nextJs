/*
  Warnings:

  - Added the required column `workoutDay` to the `UserWorkout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserWorkout" ADD COLUMN     "workoutDay" TEXT NOT NULL;
