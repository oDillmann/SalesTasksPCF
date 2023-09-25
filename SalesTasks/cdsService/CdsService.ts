import { axa_DealSetupFormAttributes } from "../cds-generated/entities/axa_DealSetupForm";
import { axa_DepartmentAttributes } from "../cds-generated/entities/axa_Department";
import { TaskAttributes, taskMetadata } from "../cds-generated/entities/Task";
import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";
import { task_task_statuscode } from "../cds-generated/enums/task_task_statuscode";
import { IInputs } from "../generated/ManifestTypes";
import { Department } from "../types/Department";
import { EncodeFile } from "./util";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;
  DSFalias = "DSF";
  departmentAlias = "department";

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async getTasks(SalesFulId: string) {
    const fetchXml = [
      "?fetchXml=",
      "<fetch>",
      "  <entity name='task'>",
      `    <attribute name='${TaskAttributes.axa_Cashpayment}'/>`,
      `    <attribute name='${TaskAttributes.axa_Fasttrack}'/>`,
      `    <attribute name='${TaskAttributes.axa_Tradeinincluded}'/>`,
      `    <attribute name='${TaskAttributes.StateCode}'/>`,
      `    <attribute name='${TaskAttributes.Subject}'/>`,
      `    <attribute name='${TaskAttributes.ActivityId}'/>`,
      `    <attribute name='${TaskAttributes.axa_Document_Name}'/>`,
      `    <link-entity name='axa_department' from='axa_departmentid' to='axa_department' link-type='outer' alias='${this.departmentAlias}'>`,
      `      <attribute name='axa_name'/>`,
      "    </link-entity>",
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
      const department = task[`${this.departmentAlias}.${axa_DepartmentAttributes.axa_Name}`]
      const fastTrack = task[TaskAttributes.axa_Fasttrack]
      const tradeIn = task[TaskAttributes.axa_Tradeinincluded]
      const cashPayment = task[TaskAttributes.axa_Cashpayment]
      const documentName = task[TaskAttributes.axa_Document_Name]
      const title = task[TaskAttributes.Subject]
      const id = task[TaskAttributes.ActivityId]
      const status = task[TaskAttributes.StateCode]
      const DSF = {
        id: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_DealSetupFormId}`],
        tradeIn: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_TradeinIncluded}`],
        cashPayment: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_Cashcustomer}`],
        fastTrack: task[`${this.DSFalias}.${axa_DealSetupFormAttributes.axa_FastTrack}`],
      }
      if (!groupedTasks[department]) {
        groupedTasks[department] = {
          id: index,
          title: department,
          tasks: [{ id, title, status, fastTrack, tradeIn, cashPayment, DSF, documentName }]
        }
      } else {
        groupedTasks[department].tasks.push({ id, title, status, fastTrack, tradeIn, cashPayment, DSF, documentName, })
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

  public async uploadFile(
    file: File,
    entityId: string,
    entitySetName: string
  ): Promise<"success" | Error> {
    try {
      const fileName = file.name;
      const array = await EncodeFile(file);
      const url =
        parent.Xrm.Utility.getGlobalContext().getClientUrl() +
        `/api/data/v9.1/${entitySetName}(${entityId})/${TaskAttributes.axa_Document}`;
      let res = await this.makeRequest({ method: "PATCH", fileName, url, bytes: null, firstRequest: true, });
      let res1 = await this.fileChunckUpload({ response: res, fileName: fileName, fileBytes: array, });
      if (res1 instanceof Error || res instanceof Error) {
        return new Error("Error uploading file");
      } else {
        return "success";
      }
    } catch (e: any) {
      return new Error(e.message);
    }
  }

  private async makeRequest({ method, fileName, url, bytes, firstRequest, offset, count, fileBytes, }: {
    method: string; fileName: string; url: string; bytes: Uint8Array | null; firstRequest: boolean; offset?: number; count?: number; fileBytes?: Uint8Array;
  }): Promise<any> {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open(method, url);
      if (firstRequest) request.setRequestHeader("x-ms-transfer-mode", "chunked");
      request.setRequestHeader("x-ms-file-name", fileName);
      if (!firstRequest) {
        request.setRequestHeader(
          "Content-Range",
          `bytes ${offset}-${((offset ?? 0) + (count ?? 0) - 1)}/${fileBytes?.length}`
        );
        request.setRequestHeader("Content-Type", "application/octet-stream");
      }
      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(request);
        } else {
          reject(new Error(request.statusText));
        }
      };
      request.onerror = () => reject(new Error(request.statusText));
      if (!firstRequest) request.send(bytes);
      else request.send();
    });
  }

  private async fileChunckUpload({ response, fileName, fileBytes, }: {
    response: XMLHttpRequest; fileName: string; fileBytes: Uint8Array;
  }): Promise<"success" | Error> {
    const url = response.getResponseHeader("location") || "";
    const chunkSize = parseInt(response.getResponseHeader("x-ms-chunk-size") || "");
    let offset = 0;
    try {
      while (offset <= fileBytes.length) {
        const count = offset + chunkSize > fileBytes.length ? fileBytes.length % chunkSize : chunkSize;
        const content = new Uint8Array(count);
        for (let i = 0; i < count; i++) content[i] = fileBytes[offset + i];
        response = await this.makeRequest({ method: "PATCH", fileName, url, bytes: content, firstRequest: false, offset, count, fileBytes, });
        if (response.status === 206) {
          // partial content, so please continue.
          offset += chunkSize;
        } else if (response.status === 204) {
          // request complete.
          return "success";
        } else {
          // error happened.
          // log error and take necessary action.
          console.error("error happened");
          return new Error("error happened" + response.status);
        }
      }
    } catch (e: any) {
      return new Error(e.message);
    }
    return "success";
  }
}
