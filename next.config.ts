import type { NextConfig } from "next";

import { createJiti } from "jiti";
import createNextIntlPlugin from "next-intl/plugin";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

async function loadEnv() {
  await jiti.import("./src/lib/env");
}

loadEnv().catch((e) => {
  console.error(e);
  process.exit(1);
});

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");
const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  experimental: {
    ppr: "incremental",
    reactCompiler: true,
  },
};

export default withNextIntl(nextConfig);
