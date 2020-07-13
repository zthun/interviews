const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  rootDir: compilerOptions.baseUrl,
  testTimeout: 60000,
  testRegex: ".spec.(ts|tsx)$",
  transform: { "^.+\\.ts$": "ts-jest" },
  moduleFileExtensions: ["js", "ts"],
  coverageDirectory: "./reports/coverage",
};
