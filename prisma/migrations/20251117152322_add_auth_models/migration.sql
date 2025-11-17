-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    `image` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profiles` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NULL,
    `height` DOUBLE NULL,
    `age` INTEGER NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NULL,
    `goalWeight` DOUBLE NULL,
    `dailyCalorieGoal` INTEGER NOT NULL DEFAULT 2000,
    `weeklyWorkouts` INTEGER NOT NULL DEFAULT 3,
    `runningExperience` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ELITE') NULL DEFAULT 'BEGINNER',
    `preferredDistanceUnit` ENUM('KILOMETERS', 'MILES') NOT NULL DEFAULT 'KILOMETERS',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_profiles_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscriptions` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `plan` ENUM('FREE', 'PREMIUM', 'PRO') NOT NULL DEFAULT 'FREE',
    `status` ENUM('ACTIVE', 'CANCELLED', 'EXPIRED') NOT NULL DEFAULT 'ACTIVE',
    `startDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endDate` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `subscriptions_userId_key`(`userId`),
    INDEX `subscriptions_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workouts` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `duration` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `type` ENUM('STRENGTH', 'CARDIO', 'RUNNING', 'MIXED') NOT NULL DEFAULT 'STRENGTH',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `workouts_userId_idx`(`userId`),
    INDEX `workouts_date_idx`(`date`),
    INDEX `workouts_type_idx`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exercises` (
    `id` VARCHAR(191) NOT NULL,
    `workoutId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `sets` INTEGER NOT NULL,
    `reps` INTEGER NOT NULL,
    `weight` DOUBLE NULL,
    `duration` INTEGER NULL,
    `notes` VARCHAR(191) NULL,
    `completed` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `exercises_workoutId_idx`(`workoutId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `runs` (
    `id` VARCHAR(191) NOT NULL,
    `workoutId` VARCHAR(191) NOT NULL,
    `distance` DOUBLE NOT NULL,
    `distanceUnit` ENUM('KILOMETERS', 'MILES') NOT NULL DEFAULT 'KILOMETERS',
    `duration` INTEGER NOT NULL,
    `pace` DOUBLE NULL,
    `averageSpeed` DOUBLE NULL,
    `maxSpeed` DOUBLE NULL,
    `elevationGain` DOUBLE NULL,
    `caloriesBurned` INTEGER NULL,
    `routeName` VARCHAR(191) NULL,
    `terrainType` ENUM('ROAD', 'TRAIL', 'TRACK', 'TREADMILL', 'BEACH', 'MOUNTAIN') NULL,
    `weather` VARCHAR(191) NULL,
    `temperature` DOUBLE NULL,
    `averageHeartRate` INTEGER NULL,
    `maxHeartRate` INTEGER NULL,
    `notes` VARCHAR(191) NULL,
    `effortLevel` ENUM('EASY', 'MODERATE', 'HARD', 'MAX_EFFORT') NULL,
    `completed` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `runs_workoutId_idx`(`workoutId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meals` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK') NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `meals_userId_idx`(`userId`),
    INDEX `meals_date_idx`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `foods` (
    `id` VARCHAR(191) NOT NULL,
    `mealId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `quantity` DOUBLE NOT NULL,
    `calories` INTEGER NOT NULL,
    `protein` DOUBLE NOT NULL,
    `carbs` DOUBLE NOT NULL,
    `fat` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `foods_mealId_idx`(`mealId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `calorie_logs` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalCalories` INTEGER NOT NULL DEFAULT 0,
    `totalProtein` DOUBLE NOT NULL DEFAULT 0,
    `totalCarbs` DOUBLE NOT NULL DEFAULT 0,
    `totalFat` DOUBLE NOT NULL DEFAULT 0,
    `calorieGoal` INTEGER NOT NULL DEFAULT 2000,
    `caloriesBurned` INTEGER NOT NULL DEFAULT 0,
    `runningCaloriesBurned` INTEGER NOT NULL DEFAULT 0,
    `totalDistance` DOUBLE NOT NULL DEFAULT 0,
    `distanceUnit` ENUM('KILOMETERS', 'MILES') NOT NULL DEFAULT 'KILOMETERS',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `calorie_logs_userId_idx`(`userId`),
    INDEX `calorie_logs_date_idx`(`date`),
    UNIQUE INDEX `calorie_logs_userId_date_key`(`userId`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invites` (
    `id` VARCHAR(191) NOT NULL,
    `senderId` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'ACCEPTED', 'EXPIRED') NOT NULL DEFAULT 'PENDING',
    `acceptedBy` VARCHAR(191) NULL,
    `acceptedAt` DATETIME(3) NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `invites_token_key`(`token`),
    UNIQUE INDEX `invites_acceptedBy_key`(`acceptedBy`),
    INDEX `invites_senderId_idx`(`senderId`),
    INDEX `invites_email_idx`(`email`),
    INDEX `invites_token_idx`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ipAddress` TEXT NULL,
    `userAgent` TEXT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `session_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(191) NOT NULL,
    `accountId` TEXT NOT NULL,
    `providerId` TEXT NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `accessToken` TEXT NULL,
    `refreshToken` TEXT NULL,
    `idToken` TEXT NULL,
    `accessTokenExpiresAt` DATETIME(3) NULL,
    `refreshTokenExpiresAt` DATETIME(3) NULL,
    `scope` TEXT NULL,
    `password` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification` (
    `id` VARCHAR(191) NOT NULL,
    `identifier` TEXT NOT NULL,
    `value` TEXT NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_profiles` ADD CONSTRAINT `user_profiles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscriptions` ADD CONSTRAINT `subscriptions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts` ADD CONSTRAINT `workouts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exercises` ADD CONSTRAINT `exercises_workoutId_fkey` FOREIGN KEY (`workoutId`) REFERENCES `workouts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `runs` ADD CONSTRAINT `runs_workoutId_fkey` FOREIGN KEY (`workoutId`) REFERENCES `workouts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `meals` ADD CONSTRAINT `meals_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_mealId_fkey` FOREIGN KEY (`mealId`) REFERENCES `meals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `calorie_logs` ADD CONSTRAINT `calorie_logs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invites` ADD CONSTRAINT `invites_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invites` ADD CONSTRAINT `invites_acceptedBy_fkey` FOREIGN KEY (`acceptedBy`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
