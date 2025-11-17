import { defineConfig } from "prisma/config";
import("dotenv/config");

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url:
      process.env.DATABASE_URL ||
      "mysql://patrick:enderson007@localhost:3306/mydb",
  },
});
