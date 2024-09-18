import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { ExpenseCreateNestedManyWithoutContractsInput } from "./ExpenseCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  certification?: CertificationWhereUniqueInput | null;
  endDate: Date;
  expenses?: ExpenseCreateNestedManyWithoutContractsInput;
  notes?: string | null;
  startDate: Date;
  typeField: "Purchase" | "Lease" | "Service" | "Other";
};
