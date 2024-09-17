import { SortOrder } from "../../util/SortOrder";

export type StorageLocationOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zip?: SortOrder;
};
