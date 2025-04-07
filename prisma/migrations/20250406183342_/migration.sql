/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Trainer` table. All the data in the column will be lost.
  - You are about to drop the column `messages` on the `Trainer` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Trainer` table. All the data in the column will be lost.
  - You are about to drop the column `requestedAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `requestedTrainer` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userTrainer` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrainingSession` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fullName]` on the table `Trainer` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `ProfilePlan` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `bio` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratings` to the `Trainer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('ADMIN', 'TRAINER', 'STAFF', 'MANAGER');

-- CreateEnum
CREATE TYPE "AuthorityType" AS ENUM ('CREATEUSER', 'DELETEUSER', 'BANUSER', 'CREATEADMIN');

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProfilePlan" DROP CONSTRAINT "ProfilePlan_userId_fkey";

-- DropForeignKey
ALTER TABLE "Trainer" DROP CONSTRAINT "Trainer_userId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingSession" DROP CONSTRAINT "TrainingSession_trainerId_fkey";

-- DropIndex
DROP INDEX "Trainer_userId_key";

-- AlterTable
ALTER TABLE "ProfilePlan" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Trainer" DROP COLUMN "createdAt",
DROP COLUMN "messages",
DROP COLUMN "userId",
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "employeeId" INTEGER NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ADD COLUMN     "ratings" TEXT NOT NULL,
ADD COLUMN     "specialzation" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "requestedAdmin",
DROP COLUMN "requestedTrainer",
DROP COLUMN "userAdmin",
DROP COLUMN "userTrainer";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "TrainingSession";

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" "RoleType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeAuthority" (
    "employeeId" INTEGER NOT NULL,
    "authorityId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeAuthority_pkey" PRIMARY KEY ("employeeId","authorityId")
);

-- CreateTable
CREATE TABLE "Authority" (
    "id" SERIAL NOT NULL,
    "authority" "AuthorityType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Authority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeRole" (
    "roleId" INTEGER NOT NULL,
    "authorityId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeRole_pkey" PRIMARY KEY ("roleId","authorityId")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,
    "trainerId" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comments" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "trainerId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "trainerId" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTrainers" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trainerId" INTEGER NOT NULL,

    CONSTRAINT "UserTrainers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmployeeToUserTrainers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_EmployeeToUserTrainers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_username_key" ON "Employee"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserTrainers_userId_trainerId_key" ON "UserTrainers"("userId", "trainerId");

-- CreateIndex
CREATE INDEX "_EmployeeToUserTrainers_B_index" ON "_EmployeeToUserTrainers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Trainer_fullName_key" ON "Trainer"("fullName");

-- AddForeignKey
ALTER TABLE "ProfilePlan" ADD CONSTRAINT "ProfilePlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAuthority" ADD CONSTRAINT "EmployeeAuthority_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAuthority" ADD CONSTRAINT "EmployeeAuthority_authorityId_fkey" FOREIGN KEY ("authorityId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeRole" ADD CONSTRAINT "EmployeeRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeRole" ADD CONSTRAINT "EmployeeRole_authorityId_fkey" FOREIGN KEY ("authorityId") REFERENCES "Authority"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrainers" ADD CONSTRAINT "UserTrainers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrainers" ADD CONSTRAINT "UserTrainers_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToUserTrainers" ADD CONSTRAINT "_EmployeeToUserTrainers_A_fkey" FOREIGN KEY ("A") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToUserTrainers" ADD CONSTRAINT "_EmployeeToUserTrainers_B_fkey" FOREIGN KEY ("B") REFERENCES "UserTrainers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
