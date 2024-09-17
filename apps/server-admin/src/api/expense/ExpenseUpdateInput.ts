import { Decimal } from "decimal.js";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { CountyWhereUniqueInput } from "../county/CountyWhereUniqueInput";
import { InventoryUnitUpdateManyWithoutExpensesInput } from "./InventoryUnitUpdateManyWithoutExpensesInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type ExpenseUpdateInput = {
  amount?: Decimal;
  contract?: ContractWhereUniqueInput | null;
  county?: CountyWhereUniqueInput | null;
  fund?: string;
  inventoryUnits?: InventoryUnitUpdateManyWithoutExpensesInput;
  name?: string;
  notes?: string | null;
  owner?: string;
  vendor?: VendorWhereUniqueInput | null;
};
