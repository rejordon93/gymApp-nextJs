/*
  Warnings:

  - The `cellPhone` column on the `ProfilePlan` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `zipCode` column on the `ProfilePlan` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProfilePlan" DROP COLUMN "cellPhone",
ADD COLUMN     "cellPhone" INTEGER,
DROP COLUMN "zipCode",
ADD COLUMN     "zipCode" INTEGER;
