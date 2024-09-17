import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";
import { CountyTitle } from "../county/CountyTitle";
import { InventoryUnitTitle } from "../inventoryUnit/InventoryUnitTitle";
import { VendorTitle } from "../vendor/VendorTitle";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="Contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
        <ReferenceInput source="county.id" reference="County" label="County">
          <SelectInput optionText={CountyTitle} />
        </ReferenceInput>
        <TextInput label="Fund" source="fund" />
        <ReferenceArrayInput source="inventoryUnits" reference="InventoryUnit">
          <SelectArrayInput
            optionText={InventoryUnitTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Notes" multiline source="notes" />
        <TextInput label="Owner" source="owner" />
        <ReferenceInput source="vendor.id" reference="Vendor" label="Vendor">
          <SelectInput optionText={VendorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
