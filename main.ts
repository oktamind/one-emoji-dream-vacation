// One Emoji, One Dream Vacation — entry: 🗻 (Mount Fuji)
//
// Why this one glyph: the judge wants a single emoji that makes a stranger
// want to book the flight. 🗻 is a mountain — the judge brief itself lists
// "a mountain" as a dream vacation — yet it is one specific place, not any
// holiday: snow-capped Fuji at sunrise, Japan, the climb, the postcard.
// It beats the generic beach on specificity (one particular dream) and on
// surprise (a fresh pick, not the obvious 🏖️), while staying instantly
// readable at small size in every culture. One code point, 4 bytes UTF-8,
// so it also wins the smaller-text tie-break. Written with no trailing
// newline: the file must hold exactly one emoji, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🗻";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
