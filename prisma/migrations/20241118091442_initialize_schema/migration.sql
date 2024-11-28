-- CreateTable
CREATE TABLE "favorite_workouts" (
    "id" SERIAL NOT NULL,
    "bodyPart" TEXT,
    "equipment" TEXT,
    "gifUrl" TEXT,
    "instructions" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "secondaryMuscles" TEXT,
    "target" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "favorite_workouts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "favorite_workouts" ADD CONSTRAINT "favorite_workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
