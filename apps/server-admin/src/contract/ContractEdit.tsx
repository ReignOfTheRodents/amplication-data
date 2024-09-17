import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CertificationTitle } from "../certification/CertificationTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="certification.id"
          reference="Certification"
          label="Certification"
        >
          <SelectInput optionText={CertificationTitle} />
        </ReferenceInput>
        <DateTimeInput label="EndDate" source="endDate" />
        <ReferenceInput source="expense.id" reference="Expense" label="Expense">
          <SelectInput optionText={ExpenseTitle} />
        </ReferenceInput>
        <TextInput label="Notes" source="notes" />
        <DateTimeInput label="StartDate" source="startDate" />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[
            { label: "Purchase", value: "Purchase" },
            { label: "Lease", value: "Lease" },
            { label: "Service", value: "Service" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
