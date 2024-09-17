import { Expense } from "../expense/Expense";
import { User } from "../user/User";

export type County = {
  createdAt: Date;
  expenses?: Array<Expense>;
  id: string;
  name: string;
  updatedAt: Date;
  users?: Array<User>;
};
