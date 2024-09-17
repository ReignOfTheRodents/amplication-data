import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";
import { COUNTY_TITLE_FIELD } from "./CountyTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const CountyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Expense"
          target="countyId"
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
        <ReferenceManyField reference="User" target="countyId" label="Users">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="County"
              source="county.id"
              reference="County"
            >
              <TextField source={COUNTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="LastLogin" source="lastLogin" />
            <TextField label="LastLogout" source="lastLogout" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Organization" source="organization" />
            <TextField label="Phone" source="phone" />
            <TextField label="Roles" source="roles" />
            <TextField label="SupervisorEmail" source="supervisorEmail" />
            <TextField label="SupervisorName" source="supervisorName" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
