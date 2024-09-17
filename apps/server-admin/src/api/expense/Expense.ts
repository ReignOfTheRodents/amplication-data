import { Decimal } from "decimal.js";
import { Contract } from "../contract/Contract";
import { County } from "../county/County";
import { InventoryUnit } from "../inventoryUnit/InventoryUnit";
import { Vendor } from "../vendor/Vendor";

export type Expense = {
  amount: Decimal;
  contract?: Contract | null;
  county?: County | null;
  createdAt: Date;
  fund: string;
  id: string;
  inventoryUnits?: Array<InventoryUnit>;
  name: string;
  notes: string | null;
  owner: string;
  updatedAt: Date;
  vendor?: Vendor | null;
};
