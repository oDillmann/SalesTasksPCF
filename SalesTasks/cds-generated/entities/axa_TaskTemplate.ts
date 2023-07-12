/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_TaskTemplate
export const axa_tasktemplateMetadata = {
  typeName: "mscrm.axa_tasktemplate",
  logicalName: "axa_tasktemplate",
  collectionName: "axa_tasktemplates",
  primaryIdAttribute: "axa_tasktemplateid",
  attributeTypes: {
    // Numeric Types
    axa_cashpayment: "Double",
    axa_phase: "Integer",
    axa_ttargetdate: "Double",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

// Attribute constants
export enum axa_TaskTemplateAttributes {
  axa_Alerts = "axa_alerts",
  axa_CashPayment = "axa_cashpayment",
  axa_Department = "axa_department",
  axa_Hasattachments = "axa_hasattachments",
  axa_ID = "axa_id",
  axa_Phase = "axa_phase",
  axa_Recipients = "axa_recipients",
  axa_Tasksubject = "axa_tasksubject",
  axa_TaskTemplateId = "axa_tasktemplateid",
  axa_TaskType = "axa_tasktype",
  axa_Tradein = "axa_tradein",
  axa_TTargetDate = "axa_ttargetdate",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface axa_TaskTemplate extends IEntity {
  // Alerts? BooleanType
  axa_alerts?: boolean | null;
  // Cash Payment DoubleType
  axa_cashpayment?: number | null;
  // Department StringType
  axa_department?: string | null;
  // Has attachments? BooleanType
  axa_hasattachments?: boolean | null;
  // ID [Required] StringType
  axa_id?: string;
  // Phase IntegerType
  axa_phase?: number | null;
  // Recipients StringType
  axa_recipients?: string | null;
  // Task subject StringType
  axa_tasksubject?: string | null;
  // Task Template UniqueidentifierType Unique identifier for entity instances
  axa_tasktemplateid?: import("cdsify").Guid | null;
  // Task Type StringType
  axa_tasktype?: string | null;
  // Trade-in? BooleanType
  axa_tradein?: boolean | null;
  // T- Target Date DoubleType
  axa_ttargetdate?: number | null;
  // Created By LookupType Unique identifier of the user who created the record.
  createdby?: import("cdsify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  modifiedby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("cdsify").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("cdsify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("cdsify").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("cdsify").EntityReference | null;
  // Status axa_tasktemplate_axa_tasktemplate_statecode Status of the Task Template
  statecode?: import("../enums/axa_tasktemplate_axa_tasktemplate_statecode").axa_tasktemplate_axa_tasktemplate_statecode | null;
  // Status Reason axa_tasktemplate_axa_tasktemplate_statuscode Reason for the status of the Task Template
  statuscode?: import("../enums/axa_tasktemplate_axa_tasktemplate_statuscode").axa_tasktemplate_axa_tasktemplate_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
