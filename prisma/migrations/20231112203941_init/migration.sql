/*
  Warnings:

  - You are about to drop the column `bannerId` on the `pics` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `pics` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pics" DROP CONSTRAINT "pics_bannerId_fkey";

-- DropForeignKey
ALTER TABLE "pics" DROP CONSTRAINT "pics_profileId_fkey";

-- AlterTable
ALTER TABLE "banners" ADD COLUMN     "picId" INTEGER;

-- AlterTable
ALTER TABLE "pics" DROP COLUMN "bannerId",
DROP COLUMN "profileId";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "picId" INTEGER;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_picId_fkey" FOREIGN KEY ("picId") REFERENCES "pics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_picId_fkey" FOREIGN KEY ("picId") REFERENCES "pics"("id") ON DELETE SET NULL ON UPDATE CASCADE;
