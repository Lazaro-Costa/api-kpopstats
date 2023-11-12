/*
  Warnings:

  - You are about to drop the column `picId` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `picId` on the `profiles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_picId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_picId_fkey";

-- AlterTable
ALTER TABLE "banners" DROP COLUMN "picId";

-- AlterTable
ALTER TABLE "pics" ADD COLUMN     "bannerId" INTEGER,
ADD COLUMN     "profileId" INTEGER;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "picId";

-- AddForeignKey
ALTER TABLE "pics" ADD CONSTRAINT "pics_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pics" ADD CONSTRAINT "pics_bannerId_fkey" FOREIGN KEY ("bannerId") REFERENCES "banners"("id") ON DELETE SET NULL ON UPDATE CASCADE;
