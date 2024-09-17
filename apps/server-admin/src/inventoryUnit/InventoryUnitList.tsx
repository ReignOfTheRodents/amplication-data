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
import { COMPONENT_TITLE_FIELD } from "../component/ComponentTitle";
import { DISPOSITION_TITLE_FIELD } from "../disposition/DispositionTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";
import { STORAGELOCATION_TITLE_FIELD } from "../storageLocation/StorageLocationTitle";

export const InventoryUnitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"InventoryUnits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="AcquisitionDate" source="acquisitionDate" />
        <ReferenceField
          label="Component"
          source="component.id"
          reference="Component"
        >
          <TextField source={COMPONENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Condition" source="condition" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Disposition"
          source="disposition.id"
          reference="Disposition"
        >
          <TextField source={DISPOSITION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Expense" source="expense.id" reference="Expense">
          <TextField source={EXPENSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="SerialNumber" source="serialNumber" />
        <ReferenceField
          label="StorageLocation"
          source="storagelocation.id"
          reference="StorageLocation"
        >
          <TextField source={STORAGELOCATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Use" source="use" />{" "}
      </Datagrid>
    </List>
  );
};
