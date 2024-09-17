import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { ComponentTitle } from "../component/ComponentTitle";
import { ContractTitle } from "../contract/ContractTitle";
import { VendorTitle } from "../vendor/VendorTitle";

export const CertificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="action"
          label="Action"
          choices={[
            { label: "Approved", value: "Approved" },
            { label: "Pending", value: "Pending" },
            { label: "Denied", value: "Denied" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="ApplicationDate" source="applicationDate" />
        <DateTimeInput label="CertificationDate" source="certificationDate" />
        <ReferenceArrayInput source="components" reference="Component">
          <SelectArrayInput
            optionText={ComponentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="contracts" reference="Contract">
          <SelectArrayInput
            optionText={ContractTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="ExpirationDate" source="expirationDate" />
        <DateTimeInput label="FederalCertDate" source="federalCertDate" />
        <TextInput label="FederalCertNumber" source="federalCertNumber" />
        <TextInput label="ModelNumber" source="modelNumber" />
        <TextInput label="Notes" multiline source="notes" />
        <SelectInput
          source="systemType"
          label="SystemType"
          choices={[
            { label: "DRE", value: "Dre" },
            { label: "OpScan", value: "OpScan" },
            { label: "DRE/Opscan", value: "DreOpscan" },
            { label: "PC/Laptop Based", value: "PcLaptopBased" },
            { label: "Tablet Based", value: "TabletBased" },
            { label: "Custom Hardware Based", value: "CustomHardwareBased" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[
            { label: "Certification", value: "Certification" },
            { label: "Reevaluation", value: "Reevaluation" },
            { label: "Renewal", value: "Renewal" },
            { label: "Recertification", value: "Recertification" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="vendor.id" reference="Vendor" label="Vendor">
          <SelectInput optionText={VendorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
