import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ComponentTitle } from "../component/ComponentTitle";
import { DispositionTitle } from "../disposition/DispositionTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";
import { StorageLocationTitle } from "../storageLocation/StorageLocationTitle";

export const InventoryUnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="AcquisitionDate" source="acquisitionDate" />
        <ReferenceInput
          source="component.id"
          reference="Component"
          label="Component"
        >
          <SelectInput optionText={ComponentTitle} />
        </ReferenceInput>
        <SelectInput
          source="condition"
          label="Condition"
          choices={[
            { label: "New", value: "New" },
            { label: "Excellent", value: "Excellent" },
            { label: "Good", value: "Good" },
            { label: "Worn", value: "Worn" },
            { label: "Damaged", value: "Damaged" },
            { label: "Unusable", value: "Unusable" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="disposition.id"
          reference="Disposition"
          label="Disposition"
        >
          <SelectInput optionText={DispositionTitle} />
        </ReferenceInput>
        <ReferenceInput source="expense.id" reference="Expense" label="Expense">
          <SelectInput optionText={ExpenseTitle} />
        </ReferenceInput>
        <TextInput label="Notes" source="notes" />
        <TextInput label="SerialNumber" source="serialNumber" />
        <ReferenceInput
          source="storageLocation.id"
          reference="StorageLocation"
          label="StorageLocation"
        >
          <SelectInput optionText={StorageLocationTitle} />
        </ReferenceInput>
        <SelectInput
          source="use"
          label="Use"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Spare", value: "Spare" },
            { label: "Display", value: "Display" },
            { label: "Other", value: "Other" },
            { label: "Inactive", value: "Inactive" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
