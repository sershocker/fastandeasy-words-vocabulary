-- CreateTable
CREATE TABLE "Cardset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "rating" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "original" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "cardsetId" INTEGER NOT NULL,
    CONSTRAINT "Word_cardsetId_fkey" FOREIGN KEY ("cardsetId") REFERENCES "Cardset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
