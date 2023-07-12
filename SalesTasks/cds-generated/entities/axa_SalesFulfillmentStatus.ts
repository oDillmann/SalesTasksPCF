/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_SalesFulfillmentStatus
export const axa_salesfulfillmentstatusMetadata = {
  typeName: "mscrm.axa_salesfulfillmentstatus",
  logicalName: "axa_salesfulfillmentstatus",
  collectionName: "axa_salesfulfillmentstatuses",
  primaryIdAttribute: "axa_salesfulfillmentstatusid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    axa_locationbranch: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    axa_esd: "DateOnly:UserLocal",
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
    axa_ServiceCallnumber: ["mscrm.incident"],
    axa_Mocel: ["mscrm.z2t_model"],
    axa_DSF: ["mscrm.axa_dealsetupform"],
  },
};

// Attribute constants
export enum axa_SalesFulfillmentStatusAttributes {
  axa_CustomerName = "axa_customername",
  axa_Description = "axa_description",
  axa_DSF = "axa_dsf",
  axa_DSFName = "axa_dsfname",
  axa_ESD = "axa_esd",
  axa_LocationBranch = "axa_locationbranch",
  axa_Mocel = "axa_mocel",
  axa_MocelName = "axa_mocelname",
  axa_Name = "axa_name",
  axa_SalesFulfillmentStatusId = "axa_salesfulfillmentstatusid",
  axa_SalespersonResponsible = "axa_salespersonresponsible",
  axa_ServiceCallnumber = "axa_servicecallnumber",
  axa_ServiceCallnumberName = "axa_servicecallnumbername",
  axa_Statustxt = "axa_statustxt",
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
export interface axa_SalesFulfillmentStatus extends IEntity {
  // Customer Name StringType
  axa_customername?: string | null;
  // Description StringType
  axa_description?: string | null;
  // DSF LookupType
  axa_dsf?: import("cdsify").EntityReference | null;
  //  StringType
  axa_dsfname?: string | null;
  // ESD DateTimeType DateOnly:UserLocal
  axa_esd?: Date | null;
  // Location/Branch crf08_nmclocation
  axa_locationbranch?: import("../enums/crf08_nmclocation").crf08_nmclocation | null;
  // Mocel LookupType
  axa_mocel?: import("cdsify").EntityReference | null;
  //  StringType
  axa_mocelname?: string | null;
  // ID StringType
  axa_name?: string | null;
  // Sales Fulfillment Status UniqueidentifierType Unique identifier for entity instances
  axa_salesfulfillmentstatusid?: import("cdsify").Guid | null;
  // Salesperson Responsible StringType
  axa_salespersonresponsible?: string | null;
  // Service Call number LookupType
  axa_servicecallnumber?: import("cdsify").EntityReference | null;
  //  StringType
  axa_servicecallnumbername?: string | null;
  // Status(txt) StringType
  axa_statustxt?: string | null;
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
  // Status axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_statecode Status of the Sales Fulfillment Status
  statecode?: import("../enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_statecode").axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_statecode | null;
  // Status Reason axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_statuscode Reason for the status of the Sales Fulfillment Status
  statuscode?: import("../enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_statuscode").axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
