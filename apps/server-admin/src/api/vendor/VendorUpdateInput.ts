import { CertificationUpdateManyWithoutVendorsInput } from "./CertificationUpdateManyWithoutVendorsInput";
import { ExpenseUpdateManyWithoutVendorsInput } from "./ExpenseUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  address?: string | null;
  certifications?: CertificationUpdateManyWithoutVendorsInput;
  city?: string | null;
  contactEmail?: string | null;
  contactFirstName?: string | null;
  contactLastName?: string | null;
  contactPhone?: string | null;
  expenses?: ExpenseUpdateManyWithoutVendorsInput;
  name?: string;
  notes?: string | null;
  product?: Array<"Epb" | "Vs" | "Service" | "Other">;
  state?: string | null;
  zip?: string | null;
};
