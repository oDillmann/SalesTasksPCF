import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";
import { DSF } from "./DSF";

export type Task = {
  id: string;
  title: string;
  status: task_task_statecode;
  tradeIn: boolean;
  cashPayment: boolean;
  fastTrack: boolean;
  documentationRequired: boolean;
  DSF: DSF;
  documentName?: string;
}
