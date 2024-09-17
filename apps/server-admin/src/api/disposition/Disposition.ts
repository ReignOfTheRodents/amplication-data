import { Decimal } from "decimal.js";
import { InventoryUnit } from "../inventoryUnit/InventoryUnit";

export type Disposition = {
  amount: Decimal | null;
  createdAt: Date;
  date: Date;
  entity: string;
  id: string;
  inventoryUnits?: Array<InventoryUnit>;
  method: string;
  notes: string | null;
  updatedAt: Date;
};
