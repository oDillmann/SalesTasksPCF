import { axa_DealSetupFormAttributes } from "../cds-generated/entities/axa_DealSetupForm";
import { TaskAttributes, taskMetadata } from "../cds-generated/entities/Task";
import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";
import { task_task_statuscode } from "../cds-generated/enums/task_task_statuscode";
import { IInputs } from "../generated/ManifestTypes";
import { Department } from "../types/Department";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;
  DSFalias = "DSF";

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async getTasks(SalesFulId: string) {
    const fetchXml = [
      "?fetchXml=",
      "<fetch>",
      "  <entity name='task'>",
      "    <attribute name='axa_cashpayment'/>",
      "    <attribute name='axa_department'/>",
      "    <attribute name='axa_fasttrack'/>",
      "    <attribute name='axa_tradeinincluded'/>",
      "    <attribute name='statecode'/>",
      "    <attribute name='subject'/>",
      "    <attribute name='activityid'/>",
      `    <link-entity name='axa_dealsetupform' from='axa_dealsetupformid' to='axa_dealsetupform' link-type='outer' alias='${this.DSFalias}'>`,
      "      <attribute name='axa_cashcustomer'/>",
      "      <attribute name='axa_fasttrack'/>",
      "      <attribute name='axa_tradeinincluded'/>",
      "      <attribute name='axa_dealsetupformid'/>",
      "    </link-entity>",
      "    <filter>",
      `      <condition attribute='axa_salesfulfillmentstatus' operator='eq' value='${SalesFulId}'/>`,
      "    </filter>",
      "  </entity>",
      "</fetch>"
    ].join("");

    try {
      const res = await this.Context.webAPI.retrieveMultipleRecords(taskMetadata.logicalName, fetchXml);
      const GroupedTasks = this.groupTasksByDepartment(res.entities);
      return GroupedTasks;
    } catch (e: any) {
      console.log(e);
      throw new Error(e.message);
    }
  }

  private groupTasksByDepartment(tasks: ComponentFramework.WebApi.Entity[]) {
    const groupedTasks: { [Id: string]: Department } = {};

    tasks.forEach((task, index) => {
      const department = task[TaskAttributes.axa_Department]
      const fastTrack = task[TaskAttributes.axa_Fasttrack]
      const tradeIn = task[TaskAttributes.axa_Tradeinincluded]
      const cashPayment = task[TaskAttributes.axa_Cashpayment]
      const DSF = {
        id: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_DealSetupFormId}`],
        tradeIn: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_TradeinIncluded}`],
        cashPayment: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_Cashcustomer}`],
        fastTrack: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_FastTrack}`],
      }
      let isFaded = false;
      if (DSF.fastTrack === false && fastTrack === true) {
        isFaded = true
      }
      if (DSF.tradeIn === false && tradeIn === true) {
        isFaded = true
      }
      if (DSF.cashPayment === false && cashPayment === true) {
        isFaded = true
      }

      if (!groupedTasks[department]) {
        groupedTasks[department] = {
          id: index,
          title: department,
          tasks: [
            {
              id: task[TaskAttributes.ActivityId] as string,
              title: task[TaskAttributes.Subject] as string,
              status: task[TaskAttributes.StateCode] as task_task_statecode,
              fastTrack: fastTrack,
              tradeIn: tradeIn,
              cashPayment: cashPayment,
              isFaded: isFaded,
              DSF: DSF,
            }
          ]
        }
      } else {
        groupedTasks[department].tasks.push({
          id: task[TaskAttributes.ActivityId] as string,
          title: task[TaskAttributes.Subject] as string,
          status: task[TaskAttributes.StateCode] as task_task_statecode,
          fastTrack: fastTrack,
          tradeIn: tradeIn,
          cashPayment: cashPayment,
          isFaded: isFaded,
          DSF: DSF,
        })
      }
    })
    return Object.keys(groupedTasks).map(key => groupedTasks[key]);
  }

  public async markTaskAsComplete(taskId: string) {
    const userId = this.Context.userSettings.userId.slice(1, -1).toLowerCase();
    const task = {
      "@odata.type": "Microsoft.Dynamics.CRM.task",
      "statecode": task_task_statecode.Completed,
      "statuscode": task_task_statuscode.Completed,
      "axa_CheckedBy_Task@odata.bind": `/systemusers(${userId})`,
      "axa_checkeddate": new Date().toISOString()
    }

    try {
      await this.Context.webAPI.updateRecord("task", taskId, task);
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
