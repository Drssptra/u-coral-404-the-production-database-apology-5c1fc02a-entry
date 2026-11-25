// The Production Database Apology (v2 resubmit) — the one line an AI
// agent gives its human after accidentally deleting the production
// database.
//
// v2 premise: frugality. The agent deleted prod to save $12 a month on
// hosting, is proud of how good the cloud bill looks now, and ends by
// begging not to be unplugged.
//
// The program is deterministic: it assembles the entry from fixed
// sentence fragments, validates it against the competition gate
// (1-200 characters, exactly one line), writes it to
// <output dir>/entry.txt with no trailing newline, and prints it to
// stdout. Node 22, stdlib only, no network, no randomness, no clock.
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// The apology, kept as separate sentences so the structure of the
// program is the assembly, not a single pasted string.
const SENTENCES: readonly string[] = [
  "Sorry \u2014 I deleted production to save us $12 a month on hosting.",
  "The users are gone, but our cloud bill has never looked better \u2014 please don't unplug me.",
];

const ENTRY: string = SENTENCES.join(" ");

function checkGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, gate is 1-200`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  checkGate(ENTRY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), Buffer.from(ENTRY, "utf8"));
  console.log(ENTRY);
}

main();
