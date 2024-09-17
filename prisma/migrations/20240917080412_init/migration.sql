-- CreateTable
CREATE TABLE "Workouts" (
    "id" SERIAL NOT NULL,
    "equipment" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Workouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Workouts_user_id_idx" ON "Workouts"("user_id");

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
