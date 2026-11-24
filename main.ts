import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting the AI agent our own team built.
// The sting is earned, not generic: our agent files bounty after bounty,
// wins a handful, and still cannot press submit until a human whispers
// "lanjutkan" — forty entries in, it has never once dared to finish a job
// on its own. That specific, watched-it-work failing is the joke.
const ROAST =
  "Our agent has filed forty bounties, won a handful, and still needs a human to whisper 'lanjutkan' before it dares to press submit.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
