/*
  Warnings:

  - You are about to drop the `WorkoutPlan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WorkoutPlan" DROP CONSTRAINT "WorkoutPlan_userPlanId_fkey";

-- DropForeignKey
ALTER TABLE "_WorkoutToUserWorkout" DROP CONSTRAINT "_WorkoutToUserWorkout_B_fkey";

-- DropTable
DROP TABLE "WorkoutPlan";

-- CreateTable
CREATE TABLE "Visits" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "checkin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weight" INTEGER NOT NULL,
    "updateWeighIn" INTEGER NOT NULL,
    "workoutReview" TEXT,
    "checkout" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Visits_userId_key" ON "Visits"("userId");

-- AddForeignKey
ALTER TABLE "Visits" ADD CONSTRAINT "Visits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WorkoutToUserWorkout" ADD CONSTRAINT "_WorkoutToUserWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "Visits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
