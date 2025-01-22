/*
  Warnings:

  - You are about to drop the `_UserWorkoutFavoritedWorkouts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserWorkoutFavoritedWorkouts" DROP CONSTRAINT "_UserWorkoutFavoritedWorkouts_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserWorkoutFavoritedWorkouts" DROP CONSTRAINT "_UserWorkoutFavoritedWorkouts_B_fkey";

-- DropTable
DROP TABLE "_UserWorkoutFavoritedWorkouts";

-- CreateTable
CREATE TABLE "_UserWorkoutFavoritedExercuses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserWorkoutFavoritedExercuses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserWorkoutFavoritedExercuses_B_index" ON "_UserWorkoutFavoritedExercuses"("B");

-- AddForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercuses" ADD CONSTRAINT "_UserWorkoutFavoritedExercuses_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoritedExercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorkoutFavoritedExercuses" ADD CONSTRAINT "_UserWorkoutFavoritedExercuses_B_fkey" FOREIGN KEY ("B") REFERENCES "UserWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
