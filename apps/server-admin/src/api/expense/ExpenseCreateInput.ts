import { Decimal } from "decimal.js";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { CountyWhereUniqueInput } from "../county/CountyWhereUniqueInput";
import { InventoryUnitCreateNestedManyWithoutExpensesInput } from "./InventoryUnitCreateNestedManyWithoutExpensesInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type ExpenseCreateInput = {
  amount: Decimal;
  contract?: ContractWhereUniqueInput | null;
  county?: CountyWhereUniqueInput | null;
  fund: string;
  inventoryUnits?: InventoryUnitCreateNestedManyWithoutExpensesInput;
  name: string;
  notes?: string | null;
  owner: string;
  vendor?: VendorWhereUniqueInput | null;
};
