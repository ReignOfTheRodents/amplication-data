import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CERTIFICATION_TITLE_FIELD } from "./CertificationTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const CertificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="SystemType" source="systemType" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vendor" source="vendor.id" reference="Vendor">
          <TextField source={VENDOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Component"
          target="certificationId"
          label="Components"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Certification"
              source="certification.id"
              reference="Certification"
            >
              <TextField source={CERTIFICATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contract"
          target="certificationId"
          label="Contracts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Certification"
              source="certification.id"
              reference="Certification"
            >
              <TextField source={CERTIFICATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <TextField label="StartDate" source="startDate" />
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
