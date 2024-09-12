import { build } from "esbuild";
import { hideBin } from "yargs/helpers";

async function getDevDependencies() {
  try {
    const { readPackage } = await import("read-pkg");
    const packageJson = await readPackage();
    const dependecies = packageJson.devDependencies
      ? Object.keys(packageJson.devDependencies)
      : [];
    return dependecies;
  } catch (error) {
    console.error("Error reading package.json:", error);
    return [];
  }
}

const localProdBuildEnvs = {};
const stagingBuildEnvs = {};
const publishEnvs = {};

const localEnvs = {
  "process.env.NODE_ENV": '"development"',
};

const argv = hideBin(process.argv);
const isLocal = argv.includes("--prod");
const isProd = argv.includes("--prod");
const isPublish = argv.includes("--publish");

let define;
if (isLocal) {
  define = localEnvs;
} else if (isProd) {
  define = localProdBuildEnvs;
} else if (isPublish) {
  define = publishEnvs;
} else {
  define = stagingBuildEnvs;
}
async function builder() {
  build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    minify: true,
    platform: "node",
    target: "node18",
    format: "esm",
    legalComments: "inline",
    outfile: "./dist/index.js",
    define: define,
    external: await getDevDependencies(),
  });
}

await builder();
