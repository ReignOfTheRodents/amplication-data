import { InventoryUnit as TInventoryUnit } from "../api/inventoryUnit/InventoryUnit";

export const INVENTORYUNIT_TITLE_FIELD = "notes";

export const InventoryUnitTitle = (record: TInventoryUnit): string => {
  return record.notes?.toString() || String(record.id);
};
