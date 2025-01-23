/*
  Warnings:

  - You are about to alter the column `time` on the `Visits` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Made the column `time` on table `Visits` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Visits" ALTER COLUMN "time" SET NOT NULL,
ALTER COLUMN "time" SET DATA TYPE INTEGER;
