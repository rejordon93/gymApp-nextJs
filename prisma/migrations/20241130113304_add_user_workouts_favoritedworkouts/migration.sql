/*
  Warnings:

  - Changed the type of `checkin` on the `WorkoutPlan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `checkout` on the `WorkoutPlan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "WorkoutPlan" DROP COLUMN "checkin",
ADD COLUMN     "checkin" TIMESTAMP(3) NOT NULL,
DROP COLUMN "checkout",
ADD COLUMN     "checkout" TIMESTAMP(3) NOT NULL;
