import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StorageLocationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StorageLocations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <TextField label="State" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip" source="zip" />{" "}
      </Datagrid>
    </List>
  );
};
