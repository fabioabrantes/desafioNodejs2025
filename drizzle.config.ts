import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("The DATABASE_URL env is required.");
}

export default defineConfig({
  dialect:
    "postgresql" /* qual banco vamos utilizar  "mysql" | "sqlite" | "pg" | "postgresql"*/,
  dbCredentials: {
    url: process.env.DATABASE_URL /* RL de conexão com o banco de dados */,
  },
  out: "./drizzle" /* Define a pasta onde os arquivos de migração serão gerados. */,
  schema:
    "./src/database/schema.ts" /* Aponta para o arquivo que contém a definição do esquema do banco de dados usando Drizzle. */,
});
