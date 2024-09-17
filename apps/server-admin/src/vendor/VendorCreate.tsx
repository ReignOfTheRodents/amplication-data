import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CertificationTitle } from "../certification/CertificationTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";

export const VendorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput source="certifications" reference="Certification">
          <SelectArrayInput
            optionText={CertificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="City" source="city" />
        <TextInput label="ContactEmail" source="contactEmail" type="email" />
        <TextInput label="ContactFirstName" source="contactFirstName" />
        <TextInput label="ContactLastName" source="contactLastName" />
        <TextInput label="ContactPhone" source="contactPhone" />
        <ReferenceArrayInput source="expenses" reference="Expense">
          <SelectArrayInput
            optionText={ExpenseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Notes" multiline source="notes" />
        <SelectArrayInput
          label="Product"
          source="product"
          choices={[
            { label: "EPB", value: "Epb" },
            { label: "VS", value: "Vs" },
            { label: "Service", value: "Service" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="State" source="state" />
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Create>
  );
};
