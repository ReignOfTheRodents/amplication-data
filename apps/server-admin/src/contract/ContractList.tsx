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
import { CERTIFICATION_TITLE_FIELD } from "../certification/CertificationTitle";

export const ContractList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Contracts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Certification"
          source="certification.id"
          reference="Certification"
        >
          <TextField source={CERTIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="StartDate" source="startDate" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
