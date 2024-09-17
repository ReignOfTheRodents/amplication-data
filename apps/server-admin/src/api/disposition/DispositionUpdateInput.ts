import { Decimal } from "decimal.js";
import { InventoryUnitUpdateManyWithoutDispositionsInput } from "./InventoryUnitUpdateManyWithoutDispositionsInput";

export type DispositionUpdateInput = {
  amount?: Decimal | null;
  date?: Date;
  entity?: string;
  inventoryUnits?: InventoryUnitUpdateManyWithoutDispositionsInput;
  method?: string;
  notes?: string | null;
};
