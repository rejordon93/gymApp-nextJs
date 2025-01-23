/*
  Warnings:

  - The `time` column on the `Visits` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Visits" DROP COLUMN "time",
ADD COLUMN     "time" DOUBLE PRECISION;
