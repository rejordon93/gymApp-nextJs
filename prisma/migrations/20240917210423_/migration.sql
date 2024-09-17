/*
  Warnings:

  - You are about to drop the `Workouts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Workouts" DROP CONSTRAINT "Workouts_user_id_fkey";

-- DropTable
DROP TABLE "Workouts";

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "equipment" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "checkin" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Workout_user_id_idx" ON "Workout"("user_id");

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
