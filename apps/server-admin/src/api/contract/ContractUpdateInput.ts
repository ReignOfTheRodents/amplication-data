import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { ExpenseUpdateManyWithoutContractsInput } from "./ExpenseUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  certification?: CertificationWhereUniqueInput | null;
  endDate?: Date;
  expenses?: ExpenseUpdateManyWithoutContractsInput;
  notes?: string | null;
  startDate?: Date;
  typeField?: "Purchase" | "Lease" | "Service" | "Other";
};
