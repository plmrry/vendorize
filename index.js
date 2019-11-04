#!/usr/bin/env node

const args = process.argv.slice(2);
const [packageName, dest = `vendor`] = args;

if (!packageName) {
  console.error(
    `You must specify a package name. For example: npx vendorize d3`,
  );
  process.exit(1);
}

const currentDirectory = process.cwd();
const destination = `${currentDirectory}/${dest}`;

const tempDir = `/tmp/npm-vendorize-${Date.now()}`;

const exec = (command) =>
  require("child_process").execSync(command, { stdio: "inherit" });

exec(`
  mkdir -p ${destination} && \ 
  mkdir -p ${tempDir} && \
  cd ${tempDir} && \
  npm pack ${packageName} && \
  tar -xf ${tempDir}/*.tgz
`);

const actualName = require(`${tempDir}/package/package.json`).name;

exec(`
  cp -r ${tempDir}/package ${destination}/${actualName}
`);
