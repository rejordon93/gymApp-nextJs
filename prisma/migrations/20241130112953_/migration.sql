-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutPlan" (
    "id" SERIAL NOT NULL,
    "userPlanId" INTEGER NOT NULL,
    "checkin" BOOLEAN NOT NULL,
    "weight" INTEGER NOT NULL,
    "updateWeighIn" INTEGER NOT NULL,
    "workoutReview" TEXT,
    "checkout" BOOLEAN NOT NULL,

    CONSTRAINT "WorkoutPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWorkout" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "UserWorkout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoritedWorkout" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "gifUrl" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "secondaryMuscles" TEXT NOT NULL,
    "target" TEXT NOT NULL,

    CONSTRAINT "FavoritedWorkout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserWorkoutFavoritedWorkouts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_UserWorkoutFavoritedWorkouts_AB_unique" ON "_UserWorkoutFavoritedWorkouts"("A", "B");

-- CreateIndex
CREATE INDEX "_UserWorkoutFavoritedWorkouts_B_index" ON "_UserWorkoutFavoritedWorkouts"("B");

-- AddForeignKey
ALTER TABLE "WorkoutPlan" ADD CONSTRAINT "WorkoutPlan_userPlanId_fkey" FOREIGN KEY ("userPlanId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWorkout" ADD CONSTRAINT "UserWorkout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorkoutFavoritedWorkouts" ADD CONSTRAINT "_UserWorkoutFavoritedWorkouts_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoritedWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorkoutFavoritedWorkouts" ADD CONSTRAINT "_UserWorkoutFavoritedWorkouts_B_fkey" FOREIGN KEY ("B") REFERENCES "UserWorkout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
