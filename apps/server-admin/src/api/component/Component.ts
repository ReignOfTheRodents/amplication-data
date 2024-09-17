import { Certification } from "../certification/Certification";
import { InventoryUnit } from "../inventoryUnit/InventoryUnit";

export type Component = {
  certification?: Certification | null;
  createdAt: Date;
  description: string;
  id: string;
  inventoryUnits?: Array<InventoryUnit>;
  name: string;
  typeField?:
    | "Dre"
    | "OpScan"
    | "Bmd"
    | "Vvpat"
    | "Cots"
    | "Other"
    | "Hardware"
    | "Software"
    | "Peripheral";
  updatedAt: Date;
};
