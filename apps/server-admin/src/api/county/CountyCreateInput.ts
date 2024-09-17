import { ExpenseCreateNestedManyWithoutCountiesInput } from "./ExpenseCreateNestedManyWithoutCountiesInput";
import { UserCreateNestedManyWithoutCountiesInput } from "./UserCreateNestedManyWithoutCountiesInput";

export type CountyCreateInput = {
  expenses?: ExpenseCreateNestedManyWithoutCountiesInput;
  name: string;
  users?: UserCreateNestedManyWithoutCountiesInput;
};
