import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CertificationTitle } from "../certification/CertificationTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
