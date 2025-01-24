/*
  Warnings:

  - Added the required column `checkinBtn` to the `Visits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visits" ADD COLUMN     "checkinBtn" BOOLEAN NOT NULL;
