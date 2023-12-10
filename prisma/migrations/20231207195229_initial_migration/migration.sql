-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "diaria" INTEGER NOT NULL,
    "especie" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "comentarioFoto" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "pokemons" ADD CONSTRAINT "pokemons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
