/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "totalBuisness" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "buisnessType" TEXT NOT NULL,
    "GSTnumber" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Buisness" (
    "id" SERIAL NOT NULL,
    "buisnessType" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "buisnessId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ProductDetail" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner_id_key" ON "Owner"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_GSTnumber_key" ON "Owner"("GSTnumber");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_email_key" ON "Owner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Buisness_id_key" ON "Buisness"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetail_id_key" ON "ProductDetail"("id");

-- AddForeignKey
ALTER TABLE "Buisness" ADD CONSTRAINT "Buisness_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_buisnessId_fkey" FOREIGN KEY ("buisnessId") REFERENCES "Buisness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDetail" ADD CONSTRAINT "ProductDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
