-- CreateTable
CREATE TABLE `TP` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(100) NOT NULL,
    `subJudul` VARCHAR(100) NOT NULL,
    `kategori` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(100) NOT NULL,
    `deadline` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
