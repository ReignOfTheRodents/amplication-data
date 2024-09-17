import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContractWhereInput = {
  certification?: CertificationWhereUniqueInput;
  endDate?: DateTimeFilter;
  expense?: ExpenseWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  startDate?: DateTimeFilter;
  typeField?: "Purchase" | "Lease" | "Service" | "Other";
};
