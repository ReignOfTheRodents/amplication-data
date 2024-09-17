import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COUNTY_TITLE_FIELD } from "../county/CountyTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="County" source="county.id" reference="County">
          <TextField source={COUNTY_TITLE_FIELD} />
        </ReferenceField>
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
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
