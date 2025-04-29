import { Mastra } from "@mastra/core";
import { createLogger } from "@mastra/core/logger";
import { travelAgent, travelAnalyzer } from "./agents";
import { syncCsvDataWorkflow } from "./workflows/attractions";
import { workflow as travelSubmissionWorkflow } from "./workflows/travel-submission";
import { LibSQLStore } from "@mastra/libsql";

export const mastra = new Mastra({
  workflows: { syncCsvDataWorkflow, travelSubmissionWorkflow },
  agents: { travelAgent, travelAnalyzer },
  storage: new LibSQLStore({
    url: "file:../mastra.db",
  }),
  logger: createLogger({
    name: "CONSOLE",
    level: "info",
  }),
});
