/*
  Warnings:

  - Added the required column `email` to the `ProfilePlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" ADD COLUMN     "email" TEXT NOT NULL;
