/*
  Warnings:

  - A unique constraint covering the columns `[workout]` on the table `UserWorkout` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserWorkout_workout_key" ON "UserWorkout"("workout");
