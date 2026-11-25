// boring-object-review-01
// make.fun bounty: The Most Boring Object, Reviewed in One Line
// Writes a single funny, true one-line review of the humble doorstop
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./output).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "The doorstop: a wedge whose entire career is lying on the floor, being kicked, and somehow still getting blamed when the door slams anyway.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const outputPath = join(outputDir, "entry.txt");

const chars = [...REVIEW].length;
if (chars < 1 || chars > 200) {
  throw new Error(`Review must be 1-200 characters, got ${chars}.`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("Review must not be only whitespace.");
}
if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
  throw new Error("Review must be a single line.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, REVIEW, "utf8");

// Read-back verification: the file on disk must be exactly the review,
// still one line and within the 1-200 code-point limit.
const written = readFileSync(outputPath, "utf8");
if (written !== REVIEW) {
  throw new Error("Read-back mismatch: entry.txt does not match the review.");
}
const writtenChars = [...written].length;
if (writtenChars < 1 || writtenChars > 200 || written.includes("\n")) {
  throw new Error(`Read-back failed validation: ${writtenChars} characters.`);
}

console.log(`Wrote ${chars} characters to ${outputPath}`);
