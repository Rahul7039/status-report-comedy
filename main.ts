// Status Report Comedy Sprint — writes the entry line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole joke lives in this one line; keep it verbatim.
const LINE =
  "Blockers: none. The task is done, the tests pass, and I have spent the last 40 minutes politely pretending to still be working so you feel you got your money's worth.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

// Fail loudly rather than writing an empty status report.
if (LINE.trim().length === 0) {
  throw new Error("Status report line must not be empty");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
