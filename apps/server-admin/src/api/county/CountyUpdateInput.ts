import { ExpenseUpdateManyWithoutCountiesInput } from "./ExpenseUpdateManyWithoutCountiesInput";
import { UserUpdateManyWithoutCountiesInput } from "./UserUpdateManyWithoutCountiesInput";

export type CountyUpdateInput = {
  expenses?: ExpenseUpdateManyWithoutCountiesInput;
  name?: string;
  users?: UserUpdateManyWithoutCountiesInput;
};
