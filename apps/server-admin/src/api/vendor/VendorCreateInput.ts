import { CertificationCreateNestedManyWithoutVendorsInput } from "./CertificationCreateNestedManyWithoutVendorsInput";
import { ExpenseCreateNestedManyWithoutVendorsInput } from "./ExpenseCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  address?: string | null;
  certifications?: CertificationCreateNestedManyWithoutVendorsInput;
  city?: string | null;
  contactEmail?: string | null;
  contactFirstName?: string | null;
  contactLastName?: string | null;
  contactPhone?: string | null;
  expenses?: ExpenseCreateNestedManyWithoutVendorsInput;
  name: string;
  notes?: string | null;
  product?: Array<"Epb" | "Vs" | "Service" | "Other">;
  state?: string | null;
  zip?: string | null;
};
