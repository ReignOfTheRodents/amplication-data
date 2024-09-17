import { SortOrder } from "../../util/SortOrder";

export type InventoryUnitOrderByInput = {
  acquisitionDate?: SortOrder;
  componentId?: SortOrder;
  condition?: SortOrder;
  createdAt?: SortOrder;
  dispositionId?: SortOrder;
  expenseId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  serialNumber?: SortOrder;
  storageLocationId?: SortOrder;
  updatedAt?: SortOrder;
  use?: SortOrder;
};
