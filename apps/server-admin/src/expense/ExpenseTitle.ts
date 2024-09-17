import { Expense as TExpense } from "../api/expense/Expense";

export const EXPENSE_TITLE_FIELD = "name";

export const ExpenseTitle = (record: TExpense): string => {
  return record.name?.toString() || String(record.id);
};
