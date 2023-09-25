/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_DealSetupForm
export const axa_dealsetupformMetadata = {
  typeName: "mscrm.axa_dealsetupform",
  logicalName: "axa_dealsetupform",
  collectionName: "axa_dealsetupforms",
  primaryIdAttribute: "axa_dealsetupformid",
  attributeTypes: {
    // Numeric Types
    axa_quantity: "Integer",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    axa_dealerinstalleditems: "Optionset",
    axa_dsfstatus: "Optionset",
    axa_paymentmethod: "Optionset",
    axa_pickupdelivery: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    axa_estimateddeliverydatetocustomer: "DateOnly:UserLocal",
    axa_estimatedmachinearrival: "DateOnly:UserLocal",
    axa_pdiandinstallestimatedcompletiondate: "DateOnly:UserLocal",
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
    axa_Tradeinrequest: ["mscrm.crf08_tradeinrequest"],
    axa_TradeinModel: ["mscrm.z2t_model"],
    axa_ServiceCall: ["mscrm.incident"],
    axa_Salesperson1: ["mscrm.systemuser"],
    axa_Salesperson: ["mscrm.z2t_salesperson"],
    axa_Quote: ["mscrm.quote"],
    axa_Opportunity: ["mscrm.opportunity"],
    axa_Model: ["mscrm.z2t_model"],
    axa_Make: ["mscrm.z2t_make"],
    axa_EquipmentNumberEQN: ["mscrm.z2t_equipment"],
    axa_CustomerProspect_contact: ["mscrm.contact"],
    axa_CustomerProspect_account: ["mscrm.account"],
    axa_CUSTOMERDELIVERYCONTACTNAME: ["mscrm.contact"],
    axa_CATAuthorizationCustomerContact: ["mscrm.contact"],
    axa_AssignedTechnician: ["mscrm.systemuser"],
  },
};

// Attribute constants
export enum axa_DealSetupFormAttributes {
  axa_Address1 = "axa_address1",
  axa_Address2 = "axa_address2",
  axa_AddressVerified = "axa_addressverified",
  axa_AssignedTechnician = "axa_assignedtechnician",
  axa_AssignedTechnicianName = "axa_assignedtechnicianname",
  axa_AssignedTechnicianYomiName = "axa_assignedtechnicianyominame",
  axa_Attachments = "axa_attachments",
  axa_Cashcustomer = "axa_cashcustomer",
  axa_CATAUTHContactEmail = "axa_catauthcontactemail",
  axa_CatAuthContactPhone = "axa_catauthcontactphone",
  axa_CATAuthorizationCustomerContact = "axa_catauthorizationcustomercontact",
  axa_CATAuthorizationCustomerContactName = "axa_catauthorizationcustomercontactname",
  axa_CATAuthorizationCustomerContactYomiName = "axa_catauthorizationcustomercontactyominame",
  axa_City = "axa_city",
  axa_CUSTOMERDELIVERYCONTACTNAME = "axa_customerdeliverycontactname",
  axa_CUSTOMERDELIVERYCONTACTNAMEName = "axa_customerdeliverycontactnamename",
  axa_CUSTOMERDELIVERYCONTACTNAMEYomiName = "axa_customerdeliverycontactnameyominame",
  axa_CustomerProspect = "axa_customerprospect",
  axa_CustomerProspectIdType = "axa_customerprospectidtype",
  axa_CustomerProspectName = "axa_customerprospectname",
  axa_CustomerProspectYomiName = "axa_customerprospectyominame",
  axa_DealerInstalledItems = "axa_dealerinstalleditems",
  axa_DealerInstalledItems1 = "axa_dealerinstalleditems1",
  axa_DealID = "axa_dealid",
  axa_DealSetupFormId = "axa_dealsetupformid",
  axa_DeliveryContactEmail = "axa_deliverycontactemail",
  axa_DeliveryContactPhone = "axa_deliverycontactphone",
  axa_DSFstatus = "axa_dsfstatus",
  axa_EquipmentNumberEQN = "axa_equipmentnumbereqn",
  axa_EquipmentNumberEQNName = "axa_equipmentnumbereqnname",
  axa_EstimatedDeliveryDatetoCustomer = "axa_estimateddeliverydatetocustomer",
  axa_EstimatedMachineArrival = "axa_estimatedmachinearrival",
  axa_FastTrack = "axa_fasttrack",
  axa_Includesattachment = "axa_includesattachment",
  axa_InStock = "axa_instock",
  axa_IsaValueInsuranceIncluded = "axa_isavalueinsuranceincluded",
  axa_IsOutsideSalesPartsVendorneeded = "axa_isoutsidesalespartsvendorneeded",
  axa_IsOutsideServiceVendorNeeded = "axa_isoutsideservicevendorneeded",
  axa_Ispaperpartsbookprovided = "axa_ispaperpartsbookprovided",
  axa_IsPSSRNeededatDelivery = "axa_ispssrneededatdelivery",
  axa_Isservicemanualprovided = "axa_isservicemanualprovided",
  axa_IsTechnologyNeeded = "axa_istechnologyneeded",
  axa_Isthedeliverypacketcomplete = "axa_isthedeliverypacketcomplete",
  axa_ISThereACVAIncluded = "axa_isthereacvaincluded",
  axa_IsThereaRepurchaseAgreement = "axa_istherearepurchaseagreement",
  axa_MachinePurchaseOrderNumber = "axa_machinepurchaseordernumber",
  axa_MachineSalesOrderNumber = "axa_machinesalesordernumber",
  axa_Machinetakeoffs = "axa_machinetakeoffs",
  axa_Make = "axa_make",
  axa_MakeName = "axa_makename",
  axa_Model = "axa_model",
  axa_ModelName = "axa_modelname",
  axa_Opportunity = "axa_opportunity",
  axa_OpportunityName = "axa_opportunityname",
  axa_OpportunityNumber = "axa_opportunitynumber",
  axa_Parts = "axa_parts",
  axa_PaymentMethod = "axa_paymentmethod",
  axa_PDIandInstallestimatedcompletiondate = "axa_pdiandinstallestimatedcompletiondate",
  axa_PDISpecialInstructions = "axa_pdispecialinstructions",
  axa_PickupDelivery = "axa_pickupdelivery",
  axa_Quantity = "axa_quantity",
  axa_Quote = "axa_quote",
  axa_QuoteName = "axa_quotename",
  axa_Salesagreementattachment = "axa_salesagreementattachment",
  axa_Salesagreementattachment_Name = "axa_salesagreementattachment_name",
  axa_Salesagreementattachment2 = "axa_salesagreementattachment2",
  axa_Salesagreementattachment2_Name = "axa_salesagreementattachment2_name",
  axa_Salesperson = "axa_salesperson",
  axa_Salesperson1 = "axa_salesperson1",
  axa_Salesperson1Name = "axa_salesperson1name",
  axa_Salesperson1YomiName = "axa_salesperson1yominame",
  axa_SalespersonName = "axa_salespersonname",
  axa_SalespersonPhone = "axa_salespersonphone",
  axa_SerialNumber = "axa_serialnumber",
  axa_ServiceCall = "axa_servicecall",
  axa_ServiceCallName = "axa_servicecallname",
  axa_ShiptoAddress = "axa_shiptoaddress",
  axa_SN = "axa_sn",
  axa_SoldToCustomerName = "axa_soldtocustomername",
  axa_Space = "axa_space",
  axa_State = "axa_state",
  axa_TradeinIncluded = "axa_tradeinincluded",
  axa_TradeinModel = "axa_tradeinmodel",
  axa_TradeinModelName = "axa_tradeinmodelname",
  axa_Tradeinrequest = "axa_tradeinrequest",
  axa_TradeinrequestName = "axa_tradeinrequestname",
  axa_TradeinSerial = "axa_tradeinserial",
  axa_Zipcode = "axa_zipcode",
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
export interface axa_DealSetupForm extends IEntity {
  // Address 1 StringType
  axa_address1?: string | null;
  // Address 2 StringType
  axa_address2?: string | null;
  // Address Verified [Required] BooleanType
  axa_addressverified?: boolean;
  // Assigned Technician LookupType
  axa_assignedtechnician?: import("cdsify").EntityReference | null;
  //  StringType
  axa_assignedtechnicianname?: string | null;
  //  StringType
  axa_assignedtechnicianyominame?: string | null;
  // Attachments StringType
  axa_attachments?: string | null;
  // Cash payment BooleanType
  axa_cashcustomer?: boolean | null;
  // CAT Auth Contact Email StringType
  axa_catauthcontactemail?: string | null;
  // CAT Auth Contact Phone # StringType
  axa_catauthcontactphone?: string | null;
  // CAT Auth Customer Contact [Required] LookupType
  axa_catauthorizationcustomercontact?: import("cdsify").EntityReference;
  //  StringType
  axa_catauthorizationcustomercontactname?: string | null;
  //  StringType
  axa_catauthorizationcustomercontactyominame?: string | null;
  // City StringType
  axa_city?: string | null;
  // Customer Delivery Contact Name [Required] LookupType
  axa_customerdeliverycontactname?: import("cdsify").EntityReference;
  //  StringType
  axa_customerdeliverycontactnamename?: string | null;
  //  StringType
  axa_customerdeliverycontactnameyominame?: string | null;
  // Sold To (Customer#) [Required] CustomerType
  axa_customerprospect?: import("cdsify").EntityReference;
  //  EntityNameType
  axa_customerprospectidtype?: string | null;
  //  StringType
  axa_customerprospectname?: string | null;
  //  StringType
  axa_customerprospectyominame?: string | null;
  // Dealer Installed Items axa_dealsetupform_axa_dealsetupform_axa_dealerinstalleditems
  axa_dealerinstalleditems?: import("../enums/axa_dealsetupform_axa_dealsetupform_axa_dealerinstalleditems").axa_dealsetupform_axa_dealsetupform_axa_dealerinstalleditems | null;
  // Dealer Installed Items1 StringType
  axa_dealerinstalleditems1?: string | null;
  // ID StringType
  axa_dealid?: string | null;
  // Machine Setup Form UniqueidentifierType Unique identifier for entity instances
  axa_dealsetupformid?: import("cdsify").Guid | null;
  // Delivery Contact Email StringType
  axa_deliverycontactemail?: string | null;
  // Delivery Contact Phone # StringType
  axa_deliverycontactphone?: string | null;
  // MSF status axa_dealsetupform_axa_dealsetupform_axa_dsfstatus
  axa_dsfstatus?: import("../enums/axa_dealsetupform_axa_dealsetupform_axa_dsfstatus").axa_dealsetupform_axa_dealsetupform_axa_dsfstatus | null;
  // Equipment Number (EQN#) LookupType
  axa_equipmentnumbereqn?: import("cdsify").EntityReference | null;
  //  StringType
  axa_equipmentnumbereqnname?: string | null;
  // Estimated Arrival Date [Required] DateTimeType DateOnly:UserLocal
  axa_estimateddeliverydatetocustomer?: Date;
  // Estimated Delivery to Customer [Required] DateTimeType DateOnly:UserLocal
  axa_estimatedmachinearrival?: Date;
  // Fast Track BooleanType
  axa_fasttrack?: boolean | null;
  // Includes attachment BooleanType
  axa_includesattachment?: boolean | null;
  // In Stock BooleanType
  axa_instock?: boolean | null;
  // Is a Value Insurance Included BooleanType
  axa_isavalueinsuranceincluded?: boolean | null;
  // Is Outside Sales/Parts Vendor needed BooleanType
  axa_isoutsidesalespartsvendorneeded?: boolean | null;
  // Is Outside Service Vendor Needed? BooleanType
  axa_isoutsideservicevendorneeded?: boolean | null;
  // Is paper parts book provided BooleanType
  axa_ispaperpartsbookprovided?: boolean | null;
  // Is PSSR Needed at Delivery? BooleanType
  axa_ispssrneededatdelivery?: boolean | null;
  // Is service manual provided BooleanType
  axa_isservicemanualprovided?: boolean | null;
  // Is Technology Needed? BooleanType
  axa_istechnologyneeded?: boolean | null;
  // Is the delivery packet complete BooleanType
  axa_isthedeliverypacketcomplete?: boolean | null;
  // CVA Included BooleanType
  axa_isthereacvaincluded?: boolean | null;
  // Is There a Repurchase Agreement BooleanType
  axa_istherearepurchaseagreement?: boolean | null;
  // Machine Purchase Order Number StringType
  axa_machinepurchaseordernumber?: string | null;
  // Machine Sales Order Number StringType
  axa_machinesalesordernumber?: string | null;
  // Machine take off(s) StringType
  axa_machinetakeoffs?: string | null;
  // Make LookupType
  axa_make?: import("cdsify").EntityReference | null;
  //  StringType
  axa_makename?: string | null;
  // Model LookupType
  axa_model?: import("cdsify").EntityReference | null;
  //  StringType
  axa_modelname?: string | null;
  // Opportunity LookupType
  axa_opportunity?: import("cdsify").EntityReference | null;
  //  StringType
  axa_opportunityname?: string | null;
  // Opportunity Number StringType
  axa_opportunitynumber?: string | null;
  // Part # StringType
  axa_parts?: string | null;
  // Payment Method [Required] axa_dealsetupform_axa_dealsetupform_axa_paymentmethod
  axa_paymentmethod?: import("../enums/axa_dealsetupform_axa_dealsetupform_axa_paymentmethod").axa_dealsetupform_axa_dealsetupform_axa_paymentmethod;
  // PDI and Install estimated completion date DateTimeType DateOnly:UserLocal
  axa_pdiandinstallestimatedcompletiondate?: Date | null;
  // PDI Special Instructions StringType
  axa_pdispecialinstructions?: string | null;
  // Pick up/Delivery [Required] axa_dealsetupform_axa_dealsetupform_axa_pickupdelivery
  axa_pickupdelivery?: import("../enums/axa_dealsetupform_axa_dealsetupform_axa_pickupdelivery").axa_dealsetupform_axa_dealsetupform_axa_pickupdelivery;
  // Quantity IntegerType
  axa_quantity?: number | null;
  // Quote # LookupType
  axa_quote?: import("cdsify").EntityReference | null;
  //  StringType
  axa_quotename?: string | null;
  // Sales agreement attachment 1 [Required] FileType
  axa_salesagreementattachment?: any;
  //  StringType
  axa_salesagreementattachment_name?: string | null;
  // Sales agreement attachment 2 FileType
  axa_salesagreementattachment2?: any | null;
  //  StringType
  axa_salesagreementattachment2_name?: string | null;
  // Salesperson LookupType
  axa_salesperson?: import("cdsify").EntityReference | null;
  // Salesperson # LookupType
  axa_salesperson1?: import("cdsify").EntityReference | null;
  //  StringType
  axa_salesperson1name?: string | null;
  //  StringType
  axa_salesperson1yominame?: string | null;
  //  StringType
  axa_salespersonname?: string | null;
  // Salesperson Phone # StringType
  axa_salespersonphone?: string | null;
  // Serial Number StringType
  axa_serialnumber?: string | null;
  // Service Call # LookupType
  axa_servicecall?: import("cdsify").EntityReference | null;
  //  StringType
  axa_servicecallname?: string | null;
  // Ship to Address StringType
  axa_shiptoaddress?: string | null;
  // S/N StringType
  axa_sn?: string | null;
  // Sold To (Customer Name) StringType
  axa_soldtocustomername?: string | null;
  // Space StringType
  axa_space?: string | null;
  // State StringType
  axa_state?: string | null;
  // Trade-in Included BooleanType
  axa_tradeinincluded?: boolean | null;
  // Trade-in Model LookupType
  axa_tradeinmodel?: import("cdsify").EntityReference | null;
  //  StringType
  axa_tradeinmodelname?: string | null;
  // Trade-in request LookupType
  axa_tradeinrequest?: import("cdsify").EntityReference | null;
  //  StringType
  axa_tradeinrequestname?: string | null;
  // Trade-in Serial StringType
  axa_tradeinserial?: string | null;
  // Zipcode StringType
  axa_zipcode?: string | null;
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
  // Status axa_dealsetupform_axa_dealsetupform_statecode Status of the Deal Setup Form
  statecode?: import("../enums/axa_dealsetupform_axa_dealsetupform_statecode").axa_dealsetupform_axa_dealsetupform_statecode | null;
  // Status Reason axa_dealsetupform_axa_dealsetupform_statuscode Reason for the status of the Deal Setup Form
  statuscode?: import("../enums/axa_dealsetupform_axa_dealsetupform_statuscode").axa_dealsetupform_axa_dealsetupform_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
