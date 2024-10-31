import { PrismaClient } from "@prisma/client";
import { createSoftDeleteExtension } from "prisma-extension-soft-delete";

declare global {
  // eslint-disable-next-line no-var
  var __database__: PrismaClient;
}

let prisma: PrismaClient;
const softDeleteExtension = createSoftDeleteExtension({
  models: {
    Post: true,
    User: true,
  },
  defaultConfig: {
    field: "deletedAt",
    createValue: (deleted) => {
      if (deleted) return new Date();
      return null;
    },
  },
});

// eslint-disable-next-line n/no-process-env
if (process.env.NODE_ENV === "production") {
  const client = new PrismaClient();
  prisma = client.$extends(softDeleteExtension) as PrismaClient;
} else {
  if (!global.__database__) {
    const client = new PrismaClient();
    global.__database__ = client.$extends(softDeleteExtension) as PrismaClient;
  }
  prisma = global.__database__;
}

export default prisma;
