import { mkdirSync, writeFileSync } from "node:fs";

const line = "The dust on my windowsill has been a seabed, a mountain, and a stranger's skin, and it has never once asked where it's going.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
