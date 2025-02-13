import { Mastra } from "@mastra/core";
import { createLogger } from "@mastra/core/logger";

import { travelAgent, travelAnalyzer } from "./agents";
import { syncCsvDataWorkflow } from "./workflows/attractions";

export const mastra = new Mastra({
  workflows: { syncCsvDataWorkflow },
  agents: { travelAgent, travelAnalyzer },
  logger: createLogger({
    name: "CONSOLE",
    level: "info",
  }),
});
