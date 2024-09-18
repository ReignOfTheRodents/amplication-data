import { Certification } from "../certification/Certification";
import { Expense } from "../expense/Expense";

export type Contract = {
  certification?: Certification | null;
  createdAt: Date;
  endDate: Date;
  expenses?: Array<Expense>;
  id: string;
  notes: string | null;
  startDate: Date;
  typeField?: "Purchase" | "Lease" | "Service" | "Other";
  updatedAt: Date;
};
