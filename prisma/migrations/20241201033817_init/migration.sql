/*
  Warnings:

  - You are about to drop the `FavoritedWorkout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserWorkoutFavoritedWorkouts" DROP CONSTRAINT "_UserWorkoutFavoritedWorkouts_A_fkey";

-- AlterTable
ALTER TABLE "WorkoutPlan" ALTER COLUMN "checkin" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "checkout" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "FavoritedWorkout";

-- CreateTable
CREATE TABLE "FavoritedExercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "gifUrl" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "secondaryMuscles" TEXT NOT NULL,
    "target" TEXT NOT NULL,

    CONSTRAINT "FavoritedExercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "_UserWorkoutFavoritedWorkouts" ADD CONSTRAINT "_UserWorkoutFavoritedWorkouts_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoritedExercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
