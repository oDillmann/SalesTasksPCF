import { TaskAttributes, taskMetadata } from "../cds-generated/entities/Task";
import { task_task_prioritycode } from "../cds-generated/enums/task_task_prioritycode";
import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";
import { IInputs } from "../generated/ManifestTypes";
import { Department } from "../types/Department";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async getTasks(SalesFulId: string) {
    const fetchXml = [
      "?fetchXml=",
      "<fetch top='50'>",
      "  <entity name='task'>",
      "    <attribute name='axa_department'/>",
      "    <attribute name='prioritycode'/>",
      "    <attribute name='subject'/>",
      "    <attribute name='statecode'/>",
      "    <filter>",
      `      <condition attribute='axa_salesfulfillmentstatus' operator='eq' value='${SalesFulId}'/>`,
      "    </filter>",
      "  </entity>",
      "</fetch>"
    ].join("");

    const res = await this.Context.webAPI.retrieveMultipleRecords(taskMetadata.logicalName, fetchXml);
    const GroupedTasks = this.groupTasksByDepartment(res.entities);
    console.log(GroupedTasks)
    return GroupedTasks;
  }

  private groupTasksByDepartment(tasks: ComponentFramework.WebApi.Entity[]) {
    const groupedTasks: { [Id: string]: Department } = {};

    tasks.forEach((task, index) => {
      const department = task[TaskAttributes.axa_Department]

      if (!groupedTasks[department]) {
        groupedTasks[department] = {
          id: index,
          title: department,
          tasks: [
            {
              id: task[TaskAttributes.ActivityId] as string,
              title: task[TaskAttributes.Subject] as string,
              status: task[TaskAttributes.StateCode] as task_task_statecode,
              priority: task[TaskAttributes.PriorityCode] as task_task_prioritycode,
            }
          ]
        }
      } else {
        groupedTasks[department].tasks.push({
          id: task[TaskAttributes.ActivityId] as string,
          title: task[TaskAttributes.Subject] as string,
          status: task[TaskAttributes.StateCode] as task_task_statecode,
          priority: task[TaskAttributes.PriorityCode] as task_task_prioritycode,
        })
      }
    })
    return Object.keys(groupedTasks).map(key => groupedTasks[key]);
  }
}
