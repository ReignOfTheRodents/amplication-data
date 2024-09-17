import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  certificationId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  expenseId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  startDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
