import { SortOrder } from "../../util/SortOrder";

export type VendorOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  contactEmail?: SortOrder;
  contactFirstName?: SortOrder;
  contactLastName?: SortOrder;
  contactPhone?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  product?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zip?: SortOrder;
};
