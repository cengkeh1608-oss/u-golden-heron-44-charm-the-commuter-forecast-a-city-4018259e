import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winner D10 (25/25 of 16 drafts): "chance of meetings" bends the classic
// "chance of rain" forecast phrase (criterion 3), rain timed to the minute
// the commuter leaves the office is the concrete commuter detail, and the
// city name Mondavia quietly riffs on Monday — a second joke at zero cost.
// Beat D5/D12 (23/25): D5's pause logic was muddled on re-read, D12's
// triple-rain opening was clunky. 104 chars, one line, no trailing newline.
const TEXT =
  "Mondavia: cloudy with a chance of meetings. Rain at 5pm sharp, timed to the minute you leave the office.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
