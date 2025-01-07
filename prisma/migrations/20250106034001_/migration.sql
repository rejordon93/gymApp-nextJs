/*
  Warnings:

  - You are about to drop the column `dayOfWeek` on the `UserWorkout` table. All the data in the column will be lost.
  - Added the required column `exercise` to the `UserWorkout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workout` to the `UserWorkout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserWorkout" DROP COLUMN "dayOfWeek",
ADD COLUMN     "exercise" TEXT NOT NULL,
ADD COLUMN     "workout" TEXT NOT NULL;
