/*
  Warnings:

  - You are about to drop the column `userId` on the `Trainer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trainer" DROP CONSTRAINT "Trainer_userId_fkey";

-- DropIndex
DROP INDEX "Trainer_userId_key";

-- AlterTable
ALTER TABLE "Trainer" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "trainerId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
