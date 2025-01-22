/*
  Warnings:

  - Made the column `checkout` on table `Visits` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Visits" ALTER COLUMN "checkout" SET NOT NULL;
