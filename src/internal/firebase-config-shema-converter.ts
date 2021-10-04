import fs from "fs";
import { compileFromFile } from "json-schema-to-typescript";

// compile from file
compileFromFile("src/schema/firebase-config.json").then((ts) =>
  fs.writeFileSync("src/firebase-config.ts", ts)
);
