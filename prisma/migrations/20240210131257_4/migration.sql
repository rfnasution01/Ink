/*
  Warnings:

  - You are about to drop the column `expired` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "expired",
DROP COLUMN "token";
