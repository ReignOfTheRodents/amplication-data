import { Certification } from "../certification/Certification";
import { Expense } from "../expense/Expense";

export type Vendor = {
  address: string | null;
  certifications?: Array<Certification>;
  city: string | null;
  contactEmail: string | null;
  contactFirstName: string | null;
  contactLastName: string | null;
  contactPhone: string | null;
  createdAt: Date;
  expenses?: Array<Expense>;
  id: string;
  name: string;
  notes: string | null;
  product?: Array<"Epb" | "Vs" | "Service" | "Other">;
  state: string | null;
  updatedAt: Date;
  zip: string | null;
};
