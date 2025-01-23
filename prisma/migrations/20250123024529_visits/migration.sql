/*
  Warnings:

  - You are about to drop the column `updateWeighIn` on the `Visits` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Visits` table. All the data in the column will be lost.
  - You are about to drop the column `workoutReview` on the `Visits` table. All the data in the column will be lost.
  - Added the required column `time` to the `Visits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visits" DROP COLUMN "updateWeighIn",
DROP COLUMN "weight",
DROP COLUMN "workoutReview",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
