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
    axa_currentmilestone: "Optionset",
    axa_currentphase: "Optionset",
    axa_locationbranch: "Optionset",
    axa_salesstatus: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    axa_confirmeddeliverydate: "DateOnly:UserLocal",
    axa_esd: "DateOnly:UserLocal",
    axa_estimatedcustomerreceiptdate: "DateOnly:UserLocal",
    axa_estimateddeliverytocustomer: "DateOnly:UserLocal",
    axa_estimatedpartsorderdate1: "DateOnly:UserLocal",
    axa_projectedservicestartdate1: "DateOnly:UserLocal",
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
    axa_SalesResponsible: ["mscrm.systemuser"],
    axa_Mocel: ["mscrm.z2t_model"],
    axa_Make: ["mscrm.z2t_make"],
    axa_EquipmentNumberEQN: ["mscrm.z2t_equipment"],
    axa_DSF: ["mscrm.axa_dealsetupform"],
    axa_CustomerProspect: ["mscrm.account"],
  },
};

// Attribute constants
export enum axa_SalesFulfillmentStatusAttributes {
  axa_ConfirmedDeliveryDate = "axa_confirmeddeliverydate",
  axa_CurrentMilestone = "axa_currentmilestone",
  axa_CurrentPhase = "axa_currentphase",
  axa_CustomerName = "axa_customername",
  axa_CustomerProspect = "axa_customerprospect",
  axa_CustomerProspectName = "axa_customerprospectname",
  axa_CustomerProspectYomiName = "axa_customerprospectyominame",
  axa_Description = "axa_description",
  axa_DoescustomerhaveCWS = "axa_doescustomerhavecws",
  axa_DoesCustomerhavedatagovernanceform = "axa_doescustomerhavedatagovernanceform",
  axa_DSF = "axa_dsf",
  axa_DSFName = "axa_dsfname",
  axa_EquipmentNumberEQN = "axa_equipmentnumbereqn",
  axa_EquipmentNumberEQNName = "axa_equipmentnumbereqnname",
  axa_ESD = "axa_esd",
  axa_EstimatedCustomerReceiptDate = "axa_estimatedcustomerreceiptdate",
  axa_EstimatedDeliverytoCustomer = "axa_estimateddeliverytocustomer",
  axa_EstimatedPartsOrderDate1 = "axa_estimatedpartsorderdate1",
  axa_Instock = "axa_instock",
  axa_Internalfinancingrequired = "axa_internalfinancingrequired",
  axa_LocationBranch = "axa_locationbranch",
  axa_Machinepurchaseordernumber = "axa_machinepurchaseordernumber",
  axa_Machinesalesordernumber = "axa_machinesalesordernumber",
  axa_Make = "axa_make",
  axa_MakeName = "axa_makename",
  axa_Mocel = "axa_mocel",
  axa_MocelName = "axa_mocelname",
  axa_Name = "axa_name",
  axa_ProjectedServiceStartDate1 = "axa_projectedservicestartdate1",
  axa_SalesFulfillmentStatusId = "axa_salesfulfillmentstatusid",
  axa_SalesResponsible = "axa_salesresponsible",
  axa_SalesResponsibleName = "axa_salesresponsiblename",
  axa_SalesResponsibleYomiName = "axa_salesresponsibleyominame",
  axa_SalesStatus = "axa_salesstatus",
  axa_Serialnumber = "axa_serialnumber",
  axa_ServiceCallnumber = "axa_servicecallnumber",
  axa_ServiceCallnumberName = "axa_servicecallnumbername",
  axa_Statustxt = "axa_statustxt",
  axa_Tradeinincluded = "axa_tradeinincluded",
  axa_Warehouse = "axa_warehouse",
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
  // Confirmed Delivery Date DateTimeType DateOnly:UserLocal
  axa_confirmeddeliverydate?: Date | null;
  // Current Milestone axa_milestoneoptions
  axa_currentmilestone?: import("../enums/axa_milestoneoptions").axa_milestoneoptions | null;
  // Current Phase axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase
  axa_currentphase?: import("../enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase").axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase | null;
  // Customer Name StringType
  axa_customername?: string | null;
  // Customer/Prospect LookupType
  axa_customerprospect?: import("cdsify").EntityReference | null;
  //  StringType
  axa_customerprospectname?: string | null;
  //  StringType
  axa_customerprospectyominame?: string | null;
  // Description StringType
  axa_description?: string | null;
  // Does customer have  CWS BooleanType
  axa_doescustomerhavecws?: boolean | null;
  // Does Customer have data governance form BooleanType
  axa_doescustomerhavedatagovernanceform?: boolean | null;
  // MSF LookupType
  axa_dsf?: import("cdsify").EntityReference | null;
  //  StringType
  axa_dsfname?: string | null;
  // Equipment Number(EQN#) LookupType
  axa_equipmentnumbereqn?: import("cdsify").EntityReference | null;
  //  StringType
  axa_equipmentnumbereqnname?: string | null;
  // Estimated Arrival Date DateTimeType DateOnly:UserLocal
  axa_esd?: Date | null;
  // Estimated Customer Receipt Date DateTimeType DateOnly:UserLocal
  axa_estimatedcustomerreceiptdate?: Date | null;
  // Estimated Delivery to Customer DateTimeType DateOnly:UserLocal
  axa_estimateddeliverytocustomer?: Date | null;
  // Estimated Parts Order Date1 DateTimeType DateOnly:UserLocal
  axa_estimatedpartsorderdate1?: Date | null;
  // In stock BooleanType
  axa_instock?: boolean | null;
  // Internal financing required BooleanType
  axa_internalfinancingrequired?: boolean | null;
  // Location/Branch crf08_nmclocation
  axa_locationbranch?: import("../enums/crf08_nmclocation").crf08_nmclocation | null;
  // Machine purchase order number StringType
  axa_machinepurchaseordernumber?: string | null;
  // Machine sales order number StringType
  axa_machinesalesordernumber?: string | null;
  // Make LookupType
  axa_make?: import("cdsify").EntityReference | null;
  //  StringType
  axa_makename?: string | null;
  // Model LookupType
  axa_mocel?: import("cdsify").EntityReference | null;
  //  StringType
  axa_mocelname?: string | null;
  // ID StringType
  axa_name?: string | null;
  // Projected Service Start Date1 DateTimeType DateOnly:UserLocal
  axa_projectedservicestartdate1?: Date | null;
  // Status UniqueidentifierType Unique identifier for entity instances
  axa_salesfulfillmentstatusid?: import("cdsify").Guid | null;
  // Sales Responsible LookupType
  axa_salesresponsible?: import("cdsify").EntityReference | null;
  //  StringType
  axa_salesresponsiblename?: string | null;
  //  StringType
  axa_salesresponsibleyominame?: string | null;
  // Sales Status axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_salesstatus
  axa_salesstatus?: import("../enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_salesstatus").axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_salesstatus | null;
  // Serial number StringType
  axa_serialnumber?: string | null;
  // Service Call number LookupType
  axa_servicecallnumber?: import("cdsify").EntityReference | null;
  //  StringType
  axa_servicecallnumbername?: string | null;
  // Status StringType
  axa_statustxt?: string | null;
  // Trade-in included BooleanType
  axa_tradeinincluded?: boolean | null;
  // Warehouse StringType
  axa_warehouse?: string | null;
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
