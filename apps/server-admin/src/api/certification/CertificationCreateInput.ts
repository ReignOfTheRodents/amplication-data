import { ComponentCreateNestedManyWithoutCertificationsInput } from "./ComponentCreateNestedManyWithoutCertificationsInput";
import { ContractCreateNestedManyWithoutCertificationsInput } from "./ContractCreateNestedManyWithoutCertificationsInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type CertificationCreateInput = {
  action: "Approved" | "Pending" | "Denied" | "Other";
  applicationDate: Date;
  certificationDate: Date;
  components?: ComponentCreateNestedManyWithoutCertificationsInput;
  contracts?: ContractCreateNestedManyWithoutCertificationsInput;
  description: string;
  expirationDate: Date;
  federalCertDate?: Date | null;
  federalCertNumber?: string | null;
  modelNumber: string;
  notes?: string | null;
  systemType:
    | "Dre"
    | "OpScan"
    | "DreOpscan"
    | "PcLaptopBased"
    | "TabletBased"
    | "CustomHardwareBased"
    | "Other";
  typeField:
    | "Certification"
    | "Reevaluation"
    | "Renewal"
    | "Recertification"
    | "Other";
  vendor?: VendorWhereUniqueInput | null;
};
