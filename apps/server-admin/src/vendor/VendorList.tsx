import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VendorList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Vendors"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <TextField label="ContactEmail" source="contactEmail" />
        <TextField label="ContactFirstName" source="contactFirstName" />
        <TextField label="ContactLastName" source="contactLastName" />
        <TextField label="ContactPhone" source="contactPhone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <TextField label="Product" source="product" />
        <TextField label="State" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip" source="zip" />{" "}
      </Datagrid>
    </List>
  );
};
