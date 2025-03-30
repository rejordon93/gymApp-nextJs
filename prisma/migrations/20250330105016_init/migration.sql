/*
  Warnings:

  - You are about to drop the `_AdminToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AdminToUser" DROP CONSTRAINT "_AdminToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdminToUser" DROP CONSTRAINT "_AdminToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "adminId" INTEGER;

-- DropTable
DROP TABLE "_AdminToUser";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
