-- CreateTable
CREATE TABLE "SalesMaster" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bId" INTEGER NOT NULL,
    "SODateTime" DATETIME NOT NULL,
    "grandTotalPrice" REAL NOT NULL,
    "paymentMode" TEXT NOT NULL,
    "paymentDetails" TEXT,
    CONSTRAINT "SalesMaster_bId_fkey" FOREIGN KEY ("bId") REFERENCES "BuyerMaster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SalesTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "SMOId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "unitPrice" REAL NOT NULL,
    "qtyPurchased" INTEGER NOT NULL,
    "total" REAL NOT NULL,
    CONSTRAINT "SalesTransaction_SMOId_fkey" FOREIGN KEY ("SMOId") REFERENCES "SalesMaster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
