/*
  Warnings:

  - A unique constraint covering the columns `[userPlanId]` on the table `WorkoutPlan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "ProfilePlan" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "homeClub" TEXT,
    "memberSince" TIMESTAMP(3),
    "cellPhone" TEXT,
    "city" TEXT,
    "zipPostal" TEXT,
    "workoutPlanId" INTEGER NOT NULL,

    CONSTRAINT "ProfilePlan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePlan_firstName_key" ON "ProfilePlan"("firstName");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePlan_lastName_key" ON "ProfilePlan"("lastName");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePlan_workoutPlanId_key" ON "ProfilePlan"("workoutPlanId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutPlan_userPlanId_key" ON "WorkoutPlan"("userPlanId");

-- AddForeignKey
ALTER TABLE "ProfilePlan" ADD CONSTRAINT "ProfilePlan_workoutPlanId_fkey" FOREIGN KEY ("workoutPlanId") REFERENCES "WorkoutPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
