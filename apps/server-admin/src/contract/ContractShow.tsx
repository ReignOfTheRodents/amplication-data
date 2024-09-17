import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CERTIFICATION_TITLE_FIELD } from "../certification/CertificationTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";

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
        <ReferenceField label="Expense" source="expense.id" reference="Expense">
          <TextField source={EXPENSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="StartDate" source="startDate" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
