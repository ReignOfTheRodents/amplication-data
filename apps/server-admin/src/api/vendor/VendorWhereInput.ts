import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CertificationListRelationFilter } from "../certification/CertificationListRelationFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type VendorWhereInput = {
  address?: StringNullableFilter;
  certifications?: CertificationListRelationFilter;
  city?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactFirstName?: StringNullableFilter;
  contactLastName?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  notes?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: StringNullableFilter;
};
