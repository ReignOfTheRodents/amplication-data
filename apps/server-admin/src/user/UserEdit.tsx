import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { CountyTitle } from "../county/CountyTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="county.id" reference="County" label="County">
          <SelectInput optionText={CountyTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <DateTimeInput label="LastLogin" source="lastLogin" />
        <DateTimeInput label="LastLogout" source="lastLogout" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Organization" source="organization" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput
          label="SupervisorEmail"
          source="supervisorEmail"
          type="email"
        />
        <TextInput label="SupervisorName" source="supervisorName" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
