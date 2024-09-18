import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastLogin?: SortOrder;
  lastLogout?: SortOrder;
  lastName?: SortOrder;
  organization?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  supervisorEmail?: SortOrder;
  supervisorName?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
