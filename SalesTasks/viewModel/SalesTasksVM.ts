import { makeAutoObservable } from "mobx";
import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";
import CdsService from "../cdsService/CdsService";
import { IInputs } from "../generated/ManifestTypes";
import ServiceProvider from "../ServiceProvider";
import { Department } from "../types/Department";

export default class SalesTasksVM {
  public static readonly serviceName = "SalesTasksVM";
  public serviceProvider: ServiceProvider;
  public context: ComponentFramework.Context<IInputs>;
  public notifyOutputChanged: () => void;
  public cdsService: CdsService;
  public Departments: Department[] = [];
  public EntityId: string;
  public errorMessage?: string;
  public PCFerror?: string;
  public isLoading: boolean = true;
  public forceUpdate: () => void;
  // saveHandlerAdded: any;

  constructor(serviceProvider: ServiceProvider, EntityId: string) {
    this.serviceProvider = serviceProvider;
    this.context = serviceProvider.get("context");
    this.notifyOutputChanged = serviceProvider.get("notifyOutputChanged");
    this.cdsService = serviceProvider.get(CdsService.serviceName);
    this.EntityId = EntityId;
    if (
      this.EntityId == undefined ||
      this.EntityId == "" ||
      this.EntityId == null
    ) {
      this.PCFerror = "Save the record before editing.";
      this.isLoading = false;
    }
    makeAutoObservable(this);
  }

  public setAppError(errorMessage: string | undefined) {
    this.PCFerror = errorMessage;
    if (this.forceUpdate) this.forceUpdate();
  }

  public setError(errorMessage: string | undefined) {
    this.errorMessage = errorMessage;
    if (this.forceUpdate) this.forceUpdate();
  }

  public async init() {
    this.isLoading = true;
    if (
      this.EntityId == undefined ||
      this.EntityId == "" ||
      this.EntityId == null
    ) {
      this.setAppError("Save the record before editing.");
      this.isLoading = false;
      return false;
    }
    this.PCFerror = undefined;
    await this.fetchData();
    this.isLoading = false;
  }

  public async fetchData(): Promise<void> {
    try {
      const departments = await this.cdsService.getTasks(this.EntityId);
      this.Departments = departments
    } catch (e: any) {
      console.log(e);
      this.setError(e.message);
    }
  }

  public async MarkTask(taskId: string, markAs: task_task_statecode) {
    try {
      if (markAs === task_task_statecode.Completed) {
        const task = this.Departments.flatMap((d) => d.tasks).find((t) => t.id === taskId);
        if (task?.documentationRequired && !task?.documentName) console.log("Please upload document")
        await this.cdsService.markTaskAsComplete(taskId);
      }
      else if (markAs === task_task_statecode.Open)
        await this.cdsService.resetTaskAsOpen(taskId);
      this.Departments = this.Departments.map((d) => {
        const newD = { ...d };
        newD.tasks = newD.tasks.map((t) => {
          if (t.id === taskId) {
            t.status = markAs
          }
          return t;
        })
        return newD
      })
      this.forceUpdate();
    } catch (e: any) {
      console.log(e);
      this.setError(e.message);
    }
  }

  public async saveFile(file: File, taskId: string) {
    try {
      await this.cdsService.uploadFile(file, taskId, "tasks");
    } catch (e: any) {
      console.log(e);
      this.setError(e.message);
    }
  }
}
