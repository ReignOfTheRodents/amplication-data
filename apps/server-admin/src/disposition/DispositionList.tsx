import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DispositionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Dispositions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Entity" source="entity" />
        <TextField label="ID" source="id" />
        <TextField label="Method" source="method" />
        <TextField label="Notes" source="notes" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
