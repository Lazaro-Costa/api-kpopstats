/*
  Warnings:

  - Made the column `picId` on table `banners` required. This step will fail if there are existing NULL values in that column.
  - Made the column `picId` on table `profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_picId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_picId_fkey";

-- AlterTable
ALTER TABLE "banners" ALTER COLUMN "picId" SET NOT NULL;

-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "picId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_picId_fkey" FOREIGN KEY ("picId") REFERENCES "pics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_picId_fkey" FOREIGN KEY ("picId") REFERENCES "pics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
