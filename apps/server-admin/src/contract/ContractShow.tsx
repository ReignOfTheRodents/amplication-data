import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTRACT_TITLE_FIELD } from "./ContractTitle";
import { COUNTY_TITLE_FIELD } from "../county/CountyTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";
import { CERTIFICATION_TITLE_FIELD } from "../certification/CertificationTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Expense"
          target="contractId"
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
