/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity Task
export const taskMetadata = {
  typeName: "mscrm.task",
  logicalName: "task",
  collectionName: "tasks",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    actualdurationminutes: "Integer",
    axa_tstartdate: "Integer",
    axa_ttargetdate: "Integer",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    onholdtime: "Integer",
    percentcomplete: "Integer",
    scheduleddurationminutes: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    axa_currentmilestone: "Optionset",
    axa_phase: "Optionset",
    prioritycode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    actualend: "DateOnly:UserLocal",
    actualstart: "DateOnly:UserLocal",
    axa_checkeddate: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    scheduledend: "DateAndTime:UserLocal",
    scheduledstart: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
  },
  navigation: {
    stageid_processstage: ["mscrm.processstage"],
    sla_task_sla: ["mscrm.sla"],
    ownerid_task: ["mscrm.principal"],
    nmc_Store_Task: ["mscrm.site"],
    axa_document_task: ["mscrm.fileattachment"],
    axa_TaskTemplate_Task: ["mscrm.axa_tasktemplate"],
    axa_SalesFulfillmentStatus_Task: ["mscrm.axa_salesfulfillmentstatus"],
    axa_Department_Task: ["mscrm.axa_department"],
    axa_DealSetupForm_Task: ["mscrm.axa_dealsetupform"],
    axa_CheckedBy_Task: ["mscrm.systemuser"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    regardingobjectid: ["account", "adx_invitation", "axa_salesfulfillmentstatus", "bookableresourcebooking", "bookableresourcebookingheader", "bulkoperation", "campaign", "campaignactivity", "cdi_automation", "cdi_bulktxtmessage", "cdi_emailcname", "cdi_emailsend", "cdi_emailtemplate", "cdi_event", "cdi_eventparticipation", "cdi_executesocialpost", "cdi_formcapture", "cdi_import", "cdi_importlog", "cdi_iporganization", "cdi_pageview", "cdi_postedfield", "cdi_postedform", "cdi_postedsubscription", "cdi_postedsurvey", "cdi_subscriptionlist", "cdi_subscriptionpreference", "cdi_surveyanswer", "cdi_surveyquestion", "cdi_unsubscribe", "cdi_visit", "cdi_webcontent", "contact", "contract", "entitlement", "entitlementtemplate", "incident", "invoice", "knowledgearticle", "knowledgebaserecord", "lead", "msdyn_agreement", "msdyn_agreementbookingdate", "msdyn_agreementbookingincident", "msdyn_agreementbookingproduct", "msdyn_agreementbookingservice", "msdyn_agreementbookingservicetask", "msdyn_agreementbookingsetup", "msdyn_agreementinvoicedate", "msdyn_agreementinvoiceproduct", "msdyn_agreementinvoicesetup", "msdyn_bookingalertstatus", "msdyn_bookingrule", "msdyn_bookingtimestamp", "msdyn_customerasset", "msdyn_fieldservicesetting", "msdyn_incidenttypecharacteristic", "msdyn_incidenttypeproduct", "msdyn_incidenttypeservice", "msdyn_inventoryadjustment", "msdyn_inventoryadjustmentproduct", "msdyn_inventoryjournal", "msdyn_inventorytransfer", "msdyn_payment", "msdyn_paymentdetail", "msdyn_paymentmethod", "msdyn_paymentterm", "msdyn_playbookinstance", "msdyn_postalbum", "msdyn_postalcode", "msdyn_processnotes", "msdyn_productinventory", "msdyn_projectteam", "msdyn_purchaseorder", "msdyn_purchaseorderbill", "msdyn_purchaseorderproduct", "msdyn_purchaseorderreceipt", "msdyn_purchaseorderreceiptproduct", "msdyn_purchaseordersubstatus", "msdyn_quotebookingincident", "msdyn_quotebookingproduct", "msdyn_quotebookingservice", "msdyn_quotebookingservicetask", "msdyn_resourceterritory", "msdyn_rma", "msdyn_rmaproduct", "msdyn_rmareceipt", "msdyn_rmareceiptproduct", "msdyn_rmasubstatus", "msdyn_rtv", "msdyn_rtvproduct", "msdyn_rtvsubstatus", "msdyn_salessuggestion", "msdyn_shipvia", "msdyn_swarm", "msdyn_systemuserschedulersetting", "msdyn_timegroup", "msdyn_timegroupdetail", "msdyn_timeoffrequest", "msdyn_warehouse", "msdyn_workorder", "msdyn_workordercharacteristic", "msdyn_workorderincident", "msdyn_workorderproduct", "msdyn_workorderresourcerestriction", "msdyn_workorderservice", "msdyn_workorderservicetask", "mspp_adplacement", "mspp_pollplacement", "mspp_publishingstatetransitionrule", "mspp_redirect", "mspp_shortcut", "mspp_website", "new_accountplan", "new_credithistory", "nmc_cvaissue", "nmc_jobtitle", "nmc_parsstrategy", "opportunity", "quote", "salesorder", "site", "stn_emr", "z2t_accountsalespersonrelationship", "z2t_changerequest", "z2t_corresondenceinfo", "z2t_csa", "z2t_division", "z2t_equipment", "z2t_make", "z2t_model", "z2t_opportunityassociations", "z2t_project", "z2t_responsiblearea", "z2t_revenuesummary", "z2t_warranty"],
    serviceid: ["service"],
    slainvokedid: ["sla"],
    transactioncurrencyid: ["transactioncurrency"],
  },
};

// Attribute constants
export enum TaskAttributes {
  ActivityAdditionalParams = "activityadditionalparams",
  ActivityId = "activityid",
  ActivityTypeCode = "activitytypecode",
  ActualDurationMinutes = "actualdurationminutes",
  ActualEnd = "actualend",
  ActualStart = "actualstart",
  axa_Alerts = "axa_alerts",
  axa_Cashpayment = "axa_cashpayment",
  axa_CheckedBy = "axa_checkedby",
  axa_CheckedByName = "axa_checkedbyname",
  axa_CheckedByYomiName = "axa_checkedbyyominame",
  axa_CheckedDate = "axa_checkeddate",
  axa_CurrentMilestone = "axa_currentmilestone",
  axa_DealSetupForm = "axa_dealsetupform",
  axa_DealSetupFormName = "axa_dealsetupformname",
  axa_Department = "axa_department",
  axa_DepartmentName = "axa_departmentname",
  axa_Document = "axa_document",
  axa_Document_Name = "axa_document_name",
  axa_Fasttrack = "axa_fasttrack",
  axa_Hasattachments = "axa_hasattachments",
  axa_Phase = "axa_phase",
  axa_Recipients = "axa_recipients",
  axa_SalesFulfillmentStatus = "axa_salesfulfillmentstatus",
  axa_SalesFulfillmentStatusName = "axa_salesfulfillmentstatusname",
  axa_Sendanalerttoowner = "axa_sendanalerttoowner",
  axa_TaskID = "axa_taskid",
  axa_TaskTemplate = "axa_tasktemplate",
  axa_TaskTemplateName = "axa_tasktemplatename",
  axa_TaskType = "axa_tasktype",
  axa_Tradeinincluded = "axa_tradeinincluded",
  axa_Tstartdate = "axa_tstartdate",
  axa_Ttargetdate = "axa_ttargetdate",
  Category = "category",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CrmTaskAssignedUniqueId = "crmtaskassigneduniqueid",
  Description = "description",
  ExchangeRate = "exchangerate",
  ImportSequenceNumber = "importsequencenumber",
  IsBilled = "isbilled",
  IsRegularActivity = "isregularactivity",
  IsWorkflowCreated = "isworkflowcreated",
  LastOnHoldTime = "lastonholdtime",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  nmc_Store = "nmc_store",
  nmc_StoreName = "nmc_storename",
  OnHoldTime = "onholdtime",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PercentComplete = "percentcomplete",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  RegardingObjectId = "regardingobjectid",
  RegardingObjectIdName = "regardingobjectidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  ServiceId = "serviceid",
  ServiceIdName = "serviceidname",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  SortDate = "sortdate",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  Subcategory = "subcategory",
  Subject = "subject",
  SubscriptionId = "subscriptionid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface Task extends IEntity {
  // Additional Parameters MemoType For internal use only.
  activityadditionalparams?: string | null;
  // Task UniqueidentifierType Unique identifier of the task.
  activityid?: import("cdsify").Guid | null;
  // Activity Type EntityNameType Type of activity.
  activitytypecode?: string | null;
  // Duration IntegerType Type the number of minutes spent on the task. The duration is used in reporting.
  actualdurationminutes?: number | null;
  // Actual End DateTimeType Enter the actual end date and time of the task. By default, it displays when the activity was completed or canceled. DateOnly:UserLocal
  actualend?: Date | null;
  // Actual Start DateTimeType Enter the actual start date and time for the task. By default, it displays when the task was created. DateOnly:UserLocal
  actualstart?: Date | null;
  // Alerts? BooleanType
  axa_alerts?: boolean | null;
  // Cash payment BooleanType
  axa_cashpayment?: boolean | null;
  // Checked By LookupType
  axa_checkedby?: import("cdsify").EntityReference | null;
  //  StringType
  axa_checkedbyname?: string | null;
  //  StringType
  axa_checkedbyyominame?: string | null;
  // Checked Date DateTimeType DateOnly:UserLocal
  axa_checkeddate?: Date | null;
  // Current Milestone axa_milestoneoptions
  axa_currentmilestone?: import("../enums/axa_milestoneoptions").axa_milestoneoptions | null;
  // Deal Setup Form LookupType
  axa_dealsetupform?: import("cdsify").EntityReference | null;
  //  StringType
  axa_dealsetupformname?: string | null;
  // Department LookupType
  axa_department?: import("cdsify").EntityReference | null;
  //  StringType
  axa_departmentname?: string | null;
  // Document FileType
  axa_document?: File | null;
  //  StringType
  axa_document_name?: string | null;
  // Fast track BooleanType
  axa_fasttrack?: boolean | null;
  // Documentation required BooleanType
  axa_hasattachments?: boolean | null;
  // Phase axa_phases
  axa_phase?: import("../enums/axa_phases").axa_phases | null;
  // Recipients StringType
  axa_recipients?: string | null;
  // Sales Fulfillment Status LookupType
  axa_salesfulfillmentstatus?: import("cdsify").EntityReference | null;
  //  StringType
  axa_salesfulfillmentstatusname?: string | null;
  // Send an alert to owner BooleanType
  axa_sendanalerttoowner?: boolean | null;
  // Task ID StringType
  axa_taskid?: string | null;
  // Task Template LookupType
  axa_tasktemplate?: import("cdsify").EntityReference | null;
  //  StringType
  axa_tasktemplatename?: string | null;
  // Task Type StringType
  axa_tasktype?: string | null;
  // Trade-in included BooleanType
  axa_tradeinincluded?: boolean | null;
  // T+ start date IntegerType
  axa_tstartdate?: number | null;
  // T- target date IntegerType
  axa_ttargetdate?: number | null;
  // Category StringType Type a category to identify the task type, such as lead gathering or customer follow up, to tie the task to a business group or function.
  category?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("cdsify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Assigned Task Unique Id UniqueidentifierType Assigned Task Unique Id
  crmtaskassigneduniqueid?: import("cdsify").Guid | null;
  // Description MemoType Type additional information to describe the task.
  description?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Is Billed BooleanType Information which specifies whether the task was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Is Workflow Created BooleanType Information which specifies if the task was created from a workflow rule.
  isworkflowcreated?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Store LookupType
  nmc_store?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_storename?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("cdsify").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Shows the record owner's business unit.
  owningbusinessunit?: import("cdsify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the task.
  owningteam?: import("cdsify").EntityReference | null;
  // Owning User LookupType Unique identifier of the user that owns the task.
  owninguser?: import("cdsify").EntityReference | null;
  // Percent Complete IntegerType Type the percentage complete value for the task to track tasks to completion.
  percentcomplete?: number | null;
  // Priority task_task_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/task_task_prioritycode").task_task_prioritycode | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("cdsify").Guid | null;
  // Regarding LookupType Choose the record that the task relates to.
  regardingobjectid?: import("cdsify").EntityReference | null;
  //  StringType
  regardingobjectidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Scheduled Duration IntegerType Scheduled duration of the task, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Due Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledend?: Date | null;
  // Start Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledstart?: Date | null;
  // Service LookupType Choose the service that is associated with this activity.
  serviceid?: import("cdsify").EntityReference | null;
  //  StringType
  serviceidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Task record.
  slaid?: import("cdsify").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this Task. This field is for internal use only.
  slainvokedid?: import("cdsify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("cdsify").Guid | null;
  // Activity Status task_task_statecode Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited.
  statecode?: import("../enums/task_task_statecode").task_task_statecode | null;
  // Status Reason task_task_statuscode Select the task's status.
  statuscode?: import("../enums/task_task_statuscode").task_task_statuscode | null;
  // Sub-Category StringType Type a subcategory to identify the task type and relate the activity to a specific product, sales region, business group, or other function.
  subcategory?: string | null;
  // Subject [Required] StringType Type a short description about the objective or primary topic of the task.
  subject?: string;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: import("cdsify").Guid | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("cdsify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the task.
  versionnumber?: number | null;
}
