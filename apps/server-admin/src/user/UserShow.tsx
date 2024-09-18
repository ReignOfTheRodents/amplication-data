import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastLogin" source="lastLogin" />
        <TextField label="LastLogout" source="lastLogout" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Organization" source="organization" />
        <TextField label="Phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <TextField label="SupervisorEmail" source="supervisorEmail" />
        <TextField label="SupervisorName" source="supervisorName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
