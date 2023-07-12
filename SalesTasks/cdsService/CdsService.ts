import { IInputs } from "../generated/ManifestTypes";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }
}
