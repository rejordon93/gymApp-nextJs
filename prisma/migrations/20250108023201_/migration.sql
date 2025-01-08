/*
  Warnings:

  - A unique constraint covering the columns `[workoutDay]` on the table `UserWorkout` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserWorkout_workoutDay_key" ON "UserWorkout"("workoutDay");
