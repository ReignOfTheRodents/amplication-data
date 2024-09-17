import { InventoryUnitUpdateManyWithoutStorageLocationsInput } from "./InventoryUnitUpdateManyWithoutStorageLocationsInput";

export type StorageLocationUpdateInput = {
  address?: string;
  city?: string;
  inventoryUnits?: InventoryUnitUpdateManyWithoutStorageLocationsInput;
  name?: string;
  notes?: string | null;
  state?: string;
  zip?: string;
};
