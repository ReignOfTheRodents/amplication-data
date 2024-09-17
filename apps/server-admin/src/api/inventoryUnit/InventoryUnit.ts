import { Component } from "../component/Component";
import { Disposition } from "../disposition/Disposition";
import { Expense } from "../expense/Expense";
import { StorageLocation } from "../storageLocation/StorageLocation";

export type InventoryUnit = {
  acquisitionDate: Date;
  component?: Component | null;
  condition?: "New" | "Excellent" | "Good" | "Worn" | "Damaged" | "Unusable";
  createdAt: Date;
  disposition?: Disposition | null;
  expense?: Expense | null;
  id: string;
  notes: string | null;
  serialNumber: string;
  storageLocation?: StorageLocation | null;
  updatedAt: Date;
  use?: "Active" | "Spare" | "Display" | "Other" | "Inactive";
};
