import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";

export type ContractCreateInput = {
  certification?: CertificationWhereUniqueInput | null;
  endDate: Date;
  expense?: ExpenseWhereUniqueInput | null;
  notes?: string | null;
  startDate: Date;
  typeField: "Purchase" | "Lease" | "Service" | "Other";
};
