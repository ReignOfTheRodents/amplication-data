import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CertificationTitle } from "../certification/CertificationTitle";
import { InventoryUnitTitle } from "../inventoryUnit/InventoryUnitTitle";

export const ComponentEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput source="inventoryUnits" reference="InventoryUnit">
          <SelectArrayInput
            optionText={InventoryUnitTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[
            { label: "DRE", value: "Dre" },
            { label: "OpScan", value: "OpScan" },
            { label: "BMD", value: "Bmd" },
            { label: "VVPAT", value: "Vvpat" },
            { label: "COTS", value: "Cots" },
            { label: "Other", value: "Other" },
            { label: "Hardware", value: "Hardware" },
            { label: "Software", value: "Software" },
            { label: "Peripheral", value: "Peripheral" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
