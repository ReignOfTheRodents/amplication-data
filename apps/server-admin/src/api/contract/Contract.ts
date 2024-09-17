import { Certification } from "../certification/Certification";
import { Expense } from "../expense/Expense";

export type Contract = {
  certification?: Certification | null;
  createdAt: Date;
  endDate: Date;
  expense?: Expense | null;
  id: string;
  notes: string | null;
  startDate: Date;
  typeField?: "Purchase" | "Lease" | "Service" | "Other";
  updatedAt: Date;
};
