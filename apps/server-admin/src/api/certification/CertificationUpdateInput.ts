import { ComponentUpdateManyWithoutCertificationsInput } from "./ComponentUpdateManyWithoutCertificationsInput";
import { ContractUpdateManyWithoutCertificationsInput } from "./ContractUpdateManyWithoutCertificationsInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type CertificationUpdateInput = {
  action?: "Approved" | "Pending" | "Denied" | "Other";
  applicationDate?: Date;
  certificationDate?: Date;
  components?: ComponentUpdateManyWithoutCertificationsInput;
  contracts?: ContractUpdateManyWithoutCertificationsInput;
  description?: string;
  expirationDate?: Date;
  federalCertDate?: Date | null;
  federalCertNumber?: string | null;
  modelNumber?: string;
  notes?: string | null;
  systemType?:
    | "Dre"
    | "OpScan"
    | "DreOpscan"
    | "PcLaptopBased"
    | "TabletBased"
    | "CustomHardwareBased"
    | "Other";
  typeField?:
    | "Certification"
    | "Reevaluation"
    | "Renewal"
    | "Recertification"
    | "Other";
  vendor?: VendorWhereUniqueInput | null;
};
