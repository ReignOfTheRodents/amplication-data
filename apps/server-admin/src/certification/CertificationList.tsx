import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const CertificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Certifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Action" source="action" />
        <TextField label="ApplicationDate" source="applicationDate" />
        <TextField label="CertificationDate" source="certificationDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ExpirationDate" source="expirationDate" />
        <TextField label="FederalCertDate" source="federalCertDate" />
        <TextField label="FederalCertNumber" source="federalCertNumber" />
        <TextField label="ID" source="id" />
        <TextField label="ModelNumber" source="modelNumber" />
        <TextField label="Notes" source="notes" />
        <TextField label="SystemSubType" source="systemSubType" />
        <TextField label="SystemType" source="systemType" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vendor" source="vendor.id" reference="Vendor">
          <TextField source={VENDOR_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
