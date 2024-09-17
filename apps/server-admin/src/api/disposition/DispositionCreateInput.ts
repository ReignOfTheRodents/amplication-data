import { Decimal } from "decimal.js";
import { InventoryUnitCreateNestedManyWithoutDispositionsInput } from "./InventoryUnitCreateNestedManyWithoutDispositionsInput";

export type DispositionCreateInput = {
  amount?: Decimal | null;
  date: Date;
  entity: string;
  inventoryUnits?: InventoryUnitCreateNestedManyWithoutDispositionsInput;
  method: string;
  notes?: string | null;
};
