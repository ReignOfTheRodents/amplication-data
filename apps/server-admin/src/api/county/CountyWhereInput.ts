import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CountyWhereInput = {
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
