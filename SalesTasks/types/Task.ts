import { task_task_prioritycode } from "../cds-generated/enums/task_task_prioritycode";
import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";

export type Task = {
  id: string;
  title: string;
  status: task_task_statecode;
  priority: task_task_prioritycode;
}
