-- AlterTable
ALTER TABLE "ProfilePlan" ADD COLUMN     "cellPhone" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "currentStatus" TEXT,
ADD COLUMN     "homeClub" TEXT,
ADD COLUMN     "memberSince" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "zipCode" TEXT;
