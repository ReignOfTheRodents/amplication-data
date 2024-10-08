import { Component } from "../component/Component";
import { Contract } from "../contract/Contract";
import { Vendor } from "../vendor/Vendor";

export type Certification = {
  action?: "Approved" | "Pending" | "Denied" | "Other";
  applicationDate: Date;
  certificationDate: Date;
  components?: Array<Component>;
  contracts?: Array<Contract>;
  createdAt: Date;
  description: string;
  expirationDate: Date;
  federalCertDate: Date | null;
  federalCertNumber: string | null;
  id: string;
  modelNumber: string;
  notes: string | null;
  systemSubType?: Array<
    | "Dre"
    | "OpScan"
    | "PcLaptopBased"
    | "TabletBased"
    | "CustomHardwareBased"
    | "Other"
  >;
  systemType?: "Vs" | "Epb";
  typeField?:
    | "Certification"
    | "Reevaluation"
    | "Renewal"
    | "Recertification"
    | "Other";
  updatedAt: Date;
  vendor?: Vendor | null;
};
