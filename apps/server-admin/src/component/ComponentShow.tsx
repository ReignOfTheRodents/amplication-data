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

import { COMPONENT_TITLE_FIELD } from "./ComponentTitle";
import { DISPOSITION_TITLE_FIELD } from "../disposition/DispositionTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";
import { STORAGELOCATION_TITLE_FIELD } from "../storageLocation/StorageLocationTitle";
import { CERTIFICATION_TITLE_FIELD } from "../certification/CertificationTitle";

export const ComponentShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InventoryUnit"
          target="componentId"
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
