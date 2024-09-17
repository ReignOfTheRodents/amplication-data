import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPONENT_TITLE_FIELD } from "../component/ComponentTitle";
import { DISPOSITION_TITLE_FIELD } from "../disposition/DispositionTitle";
import { EXPENSE_TITLE_FIELD } from "./ExpenseTitle";
import { STORAGELOCATION_TITLE_FIELD } from "../storageLocation/StorageLocationTitle";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";
import { COUNTY_TITLE_FIELD } from "../county/CountyTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const ExpenseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="Contract"
          source="contract.id"
          reference="Contract"
        >
          <TextField source={CONTRACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="County" source="county.id" reference="County">
          <TextField source={COUNTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fund" source="fund" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <TextField label="Owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vendor" source="vendor.id" reference="Vendor">
          <TextField source={VENDOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="InventoryUnit"
          target="expenseId"
          label="InventoryUnits"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="AcquisitionDate" source="acquisitionDate" />
            <ReferenceField
              label="Component"
              source="component.id"
              reference="Component"
            >
              <TextField source={COMPONENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Condition" source="condition" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Disposition"
              source="disposition.id"
              reference="Disposition"
            >
              <TextField source={DISPOSITION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense"
              source="expense.id"
              reference="Expense"
            >
              <TextField source={EXPENSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <TextField label="SerialNumber" source="serialNumber" />
            <ReferenceField
              label="StorageLocation"
              source="storagelocation.id"
              reference="StorageLocation"
            >
              <TextField source={STORAGELOCATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Use" source="use" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
