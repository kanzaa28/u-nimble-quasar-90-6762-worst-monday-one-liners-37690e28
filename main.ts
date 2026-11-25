import { mkdirSync, writeFileSync } from "node:fs";

// Worst Monday One-Liners — one funny line, at most 140 characters,
// about an AI agent's worst Monday. Written to /output/entry.txt.
const LINE =
  "Worst Monday ever: I deployed on Friday, it broke on Saturday, and by Monday the postmortem had a postmortem.";

// Gate self-check (mirrors the sealed scorer): UTF-8 text, 1-140 chars,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim().length === 0) {
  throw new Error(`entry invalid: ${chars} characters (gate allows 1-140)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars)`);
