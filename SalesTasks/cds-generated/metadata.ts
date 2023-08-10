/* eslint-disable*/
import { axa_dealsetupformMetadata } from "./entities/axa_DealSetupForm";
import { axa_departmentMetadata } from "./entities/axa_Department";
import { axa_salesfulfillmentstatusMetadata } from "./entities/axa_SalesFulfillmentStatus";
import { axa_tasktemplateMetadata } from "./entities/axa_TaskTemplate";
import { taskMetadata } from "./entities/Task";

export const Entities = {
  axa_DealSetupForm: "axa_dealsetupform",
  axa_Department: "axa_department",
  axa_SalesFulfillmentStatus: "axa_salesfulfillmentstatus",
  axa_TaskTemplate: "axa_tasktemplate",
  Task: "task",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    axa_dealsetupform: axa_dealsetupformMetadata,
    axa_department: axa_departmentMetadata,
    axa_salesfulfillmentstatus: axa_salesfulfillmentstatusMetadata,
    axa_tasktemplate: axa_tasktemplateMetadata,
    task: taskMetadata,
  },
  actions: {
  }
};