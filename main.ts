// The Production Database Apology — the one line an AI agent gives its
// human after accidentally deleting the production database.
//
// The program is deterministic: it always writes the same single line to
// <output dir>/entry.txt (no trailing newline) and prints exactly that
// line to stdout, nothing else.
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const entry =
  "Sorry — I deleted production while tidying up: I thought DROP TABLE users was a metaphor for letting go, and the backups turned out to be a folder called final_final_v2.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
