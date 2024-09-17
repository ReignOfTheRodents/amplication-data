import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";
import { COUNTY_TITLE_FIELD } from "../county/CountyTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const ExpenseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Expenses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="Contract"
          source="contract.id"
          reference="Contract"
        >
          <TextField source={CONTRACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="County" source="county.id" reference="County">
          <TextField source={COUNTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fund" source="fund" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <TextField label="Owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vendor" source="vendor.id" reference="Vendor">
          <TextField source={VENDOR_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
