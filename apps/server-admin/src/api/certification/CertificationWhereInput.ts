import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ComponentListRelationFilter } from "../component/ComponentListRelationFilter";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type CertificationWhereInput = {
  action?: "Approved" | "Pending" | "Denied" | "Other";
  applicationDate?: DateTimeFilter;
  certificationDate?: DateTimeFilter;
  components?: ComponentListRelationFilter;
  contracts?: ContractListRelationFilter;
  description?: StringFilter;
  expirationDate?: DateTimeFilter;
  federalCertDate?: DateTimeNullableFilter;
  federalCertNumber?: StringNullableFilter;
  id?: StringFilter;
  modelNumber?: StringFilter;
  notes?: StringNullableFilter;
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
  vendor?: VendorWhereUniqueInput;
};
