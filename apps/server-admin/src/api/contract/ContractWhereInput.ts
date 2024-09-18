import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContractWhereInput = {
  certification?: CertificationWhereUniqueInput;
  endDate?: DateTimeFilter;
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  startDate?: DateTimeFilter;
  typeField?: "Purchase" | "Lease" | "Service" | "Other";
};
