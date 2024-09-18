import { SortOrder } from "../../util/SortOrder";

export type CertificationOrderByInput = {
  action?: SortOrder;
  applicationDate?: SortOrder;
  certificationDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  expirationDate?: SortOrder;
  federalCertDate?: SortOrder;
  federalCertNumber?: SortOrder;
  id?: SortOrder;
  modelNumber?: SortOrder;
  notes?: SortOrder;
  systemSubType?: SortOrder;
  systemType?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  vendorId?: SortOrder;
};
