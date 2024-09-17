import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  amount?: SortOrder;
  contractId?: SortOrder;
  countyId?: SortOrder;
  createdAt?: SortOrder;
  fund?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
  vendorId?: SortOrder;
};
