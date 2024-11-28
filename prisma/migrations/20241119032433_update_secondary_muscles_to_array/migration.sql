/*
  Warnings:

  - The `secondaryMuscles` column on the `favorite_workouts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "favorite_workouts" DROP COLUMN "secondaryMuscles",
ADD COLUMN     "secondaryMuscles" TEXT[];
