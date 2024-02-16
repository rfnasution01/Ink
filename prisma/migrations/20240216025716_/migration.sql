/*
  Warnings:

  - You are about to drop the column `userId` on the `Status` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Status" DROP CONSTRAINT "Status_userId_fkey";

-- AlterTable
ALTER TABLE "Status" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "TransactionStatus" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "TransactionStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransactionStatus_transactionId_statusId_key" ON "TransactionStatus"("transactionId", "statusId");

-- AddForeignKey
ALTER TABLE "TransactionStatus" ADD CONSTRAINT "TransactionStatus_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionStatus" ADD CONSTRAINT "TransactionStatus_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
