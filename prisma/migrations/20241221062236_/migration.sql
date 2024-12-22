/*
  Warnings:

  - You are about to drop the column `workoutPlanId` on the `ProfilePlan` table. All the data in the column will be lost.
  - You are about to drop the `_UserWorkoutFavoritedExercuses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `ProfilePlan` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ProfilePlan" DROP CONSTRAINT "ProfilePlan_workoutPlanId_fkey";

-- DropForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercuses" DROP CONSTRAINT "_UserWorkoutFavoritedExercuses_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercuses" DROP CONSTRAINT "_UserWorkoutFavoritedExercuses_B_fkey";

-- DropIndex
DROP INDEX "ProfilePlan_workoutPlanId_key";

-- AlterTable
ALTER TABLE "ProfilePlan" DROP COLUMN "workoutPlanId",
ADD COLUMN     "userId" INTEGER,
ADD COLUMN     "userName" TEXT;

-- DropTable
DROP TABLE "_UserWorkoutFavoritedExercuses";

-- CreateTable
CREATE TABLE "_WorkoutToUserWorkout" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_WorkoutToUserWorkout_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_UserWorkoutFavoritedExercises" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserWorkoutFavoritedExercises_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_WorkoutToUserWorkout_B_index" ON "_WorkoutToUserWorkout"("B");

-- CreateIndex
CREATE INDEX "_UserWorkoutFavoritedExercises_B_index" ON "_UserWorkoutFavoritedExercises"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePlan_userId_key" ON "ProfilePlan"("userId");

-- AddForeignKey
ALTER TABLE "ProfilePlan" ADD CONSTRAINT "ProfilePlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WorkoutToUserWorkout" ADD CONSTRAINT "_WorkoutToUserWorkout_A_fkey" FOREIGN KEY ("A") REFERENCES "UserWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WorkoutToUserWorkout" ADD CONSTRAINT "_WorkoutToUserWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkoutPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercises" ADD CONSTRAINT "_UserWorkoutFavoritedExercises_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoritedExercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercises" ADD CONSTRAINT "_UserWorkoutFavoritedExercises_B_fkey" FOREIGN KEY ("B") REFERENCES "UserWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
