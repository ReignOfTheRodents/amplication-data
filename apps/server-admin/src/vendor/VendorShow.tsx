import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VENDOR_TITLE_FIELD } from "./VendorTitle";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";
import { COUNTY_TITLE_FIELD } from "../county/CountyTitle";

export const VendorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <TextField label="ContactEmail" source="contactEmail" />
        <TextField label="ContactFirstName" source="contactFirstName" />
        <TextField label="ContactLastName" source="contactLastName" />
        <TextField label="ContactPhone" source="contactPhone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <TextField label="Product" source="product" />
        <TextField label="State" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip" source="zip" />
        <ReferenceManyField
          reference="Certification"
          target="vendorId"
          label="Certifications"
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
            <TextField label="SystemType" source="systemType" />
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vendor"
              source="vendor.id"
              reference="Vendor"
            >
              <TextField source={VENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Expense"
          target="vendorId"
          label="Expenses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Contract"
              source="contract.id"
              reference="Contract"
            >
              <TextField source={CONTRACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="County"
              source="county.id"
              reference="County"
            >
              <TextField source={COUNTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fund" source="fund" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Notes" source="notes" />
            <TextField label="Owner" source="owner" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vendor"
              source="vendor.id"
              reference="Vendor"
            >
              <TextField source={VENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
