/*
  Warnings:

  - Added the required column `isAdmin` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL;
