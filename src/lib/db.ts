import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var __database__: PrismaClient;
}

let prisma: PrismaClient;

// eslint-disable-next-line n/no-process-env
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__database__) {
    global.__database__ = new PrismaClient();
  }
  prisma = global.__database__;
}

export default prisma;
