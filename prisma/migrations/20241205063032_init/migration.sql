-- AlterTable
ALTER TABLE "_UserWorkoutFavoritedWorkouts" ADD CONSTRAINT "_UserWorkoutFavoritedWorkouts_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_UserWorkoutFavoritedWorkouts_AB_unique";
