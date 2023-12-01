-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "pubkey" TEXT NOT NULL,
    "firstLogin" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_pubkey_key" ON "User"("pubkey");
