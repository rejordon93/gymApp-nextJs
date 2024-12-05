/*
  Warnings:

  - You are about to drop the `_UserWorkoutFavoritedExercuses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercuses" DROP CONSTRAINT "_UserWorkoutFavoritedExercuses_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercuses" DROP CONSTRAINT "_UserWorkoutFavoritedExercuses_B_fkey";

-- DropTable
DROP TABLE "_UserWorkoutFavoritedExercuses";

-- CreateTable
CREATE TABLE "_FavoritedExercisesOnWorkouts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FavoritedExercisesOnWorkouts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_FavoritedExercisesOnWorkouts_B_index" ON "_FavoritedExercisesOnWorkouts"("B");

-- AddForeignKey
ALTER TABLE "_FavoritedExercisesOnWorkouts" ADD CONSTRAINT "_FavoritedExercisesOnWorkouts_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoritedExercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoritedExercisesOnWorkouts" ADD CONSTRAINT "_FavoritedExercisesOnWorkouts_B_fkey" FOREIGN KEY ("B") REFERENCES "UserWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
