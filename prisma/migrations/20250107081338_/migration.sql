/*
  Warnings:

  - The `instructions` column on the `FavoritedExercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `secondaryMuscles` column on the `FavoritedExercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `bodyPart` to the `FavoritedExercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FavoritedExercise" ADD COLUMN     "bodyPart" TEXT NOT NULL,
DROP COLUMN "instructions",
ADD COLUMN     "instructions" TEXT[],
DROP COLUMN "secondaryMuscles",
ADD COLUMN     "secondaryMuscles" TEXT[];
