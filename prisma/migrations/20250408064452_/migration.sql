/*
  Warnings:

  - The `ratings` column on the `Trainer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[authority]` on the table `Authority` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "editedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Trainer" ALTER COLUMN "bio" SET DEFAULT '',
ALTER COLUMN "isActive" SET DEFAULT false,
DROP COLUMN "ratings",
ADD COLUMN     "ratings" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Authority_authority_key" ON "Authority"("authority");
