import { InventoryUnit } from "../inventoryUnit/InventoryUnit";

export type StorageLocation = {
  address: string;
  city: string;
  createdAt: Date;
  id: string;
  inventoryUnits?: Array<InventoryUnit>;
  name: string;
  notes: string | null;
  state: string;
  updatedAt: Date;
  zip: string;
};
