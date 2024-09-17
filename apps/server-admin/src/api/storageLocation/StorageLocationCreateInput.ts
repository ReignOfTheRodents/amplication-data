import { InventoryUnitCreateNestedManyWithoutStorageLocationsInput } from "./InventoryUnitCreateNestedManyWithoutStorageLocationsInput";

export type StorageLocationCreateInput = {
  address: string;
  city: string;
  inventoryUnits?: InventoryUnitCreateNestedManyWithoutStorageLocationsInput;
  name: string;
  notes?: string | null;
  state: string;
  zip: string;
};
