/*
  Warnings:

  - You are about to drop the `tp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `tp`;

-- CreateTable
CREATE TABLE `tps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(100) NOT NULL,
    `subJudul` VARCHAR(100) NOT NULL,
    `kategori` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(100) NOT NULL,
    `deadline` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
