import { makeAutoObservable } from "mobx";
import CdsService from "../cdsService/CdsService";
import { IInputs } from "../generated/ManifestTypes";
import ServiceProvider from "../ServiceProvider";

export default class SalesTasksVM {
  public static readonly serviceName = "SalesTasksVM";
  public serviceProvider: ServiceProvider;
  public context: ComponentFramework.Context<IInputs>;
  public notifyOutputChanged: () => void;
  public cdsService: CdsService;
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
    // if (!this.saveHandlerAdded) {
    //   const xrm: any = window.parent.Xrm;
    //   try {
    //     const formContext = xrm.Page.getControl(
    //       this.context.parameters?.sampleProperty.attributes?.LogicalName ||
    //       "axa_name"
    //     )?.formContext;
    //     formContext.data.entity.addOnSave(this.onSaveHandler.bind(this));
    //     this.saveHandlerAdded = true;
    //   } catch (e: any) {
    //     console.dir(e);
    //   }
    // }
    await this.fetchData();
    this.isLoading = false;
  }

  // /**
  //  * this function is called on form save event
  //  * the reason we have this on top of the saveQuestion function
  //  * is just to split the code up, where here we handle whether we save or not
  //  */
  // public async onSaveHandler(
  //   event: Xrm.Events.SaveEventContext
  // ): Promise<void> {
  //   try {
  //     // SAVE STUFF
  //   } catch (e: any) {
  //     console.dir(e);
  //   }
  // }

  public async fetchData(): Promise<void> {
    try {
      //GET STUFF
    } catch (e: any) {
      console.log(e);
      this.setError(e.message);
    }
  }
}
